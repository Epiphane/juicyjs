var fs = require('fs');
var minify = require('html-minifier').minify;
var path = require("path");
var UglifyJS = require("uglify-js");

var rmdir = function(dir) {
   if (!fs.existsSync(dir)) {
      return;
   }

   var list = fs.readdirSync(dir);
   for(var i = 0; i < list.length; i++) {
      var filename = path.join(dir, list[i]);
      var stat = fs.statSync(filename);
      
      if(filename == "." || filename == "..") {
         // pass these files
      } else if(stat.isDirectory()) {
         // rmdir recursively
         rmdir(filename);
      } else {
         // rm fiilename
         fs.unlinkSync(filename);
      }
   }
   fs.rmdirSync(dir);
};

var dirFor = function(url) {
   return url.split('/').slice(0, -1).join('/') + '/';
}

process.stdin.setEncoding('utf8');
process.stdin.getline = function(callback) {
   process.stdin.once('data', function(data) {
      callback(data.toString());
      process.stdin.unref();
   });
};

if (process.argv.length <= 2) {
   process.stdout.write('Enter base directory to build from (blank for this directory): ');
   process.stdin.getline(buildDirectory);
}
else {
   buildDirectory(process.argv[2]);
}

var BUILD = 'build';
function buildDirectory(dir) {
   dir = dir.replace(/\n/g, '') || '.';
   if (dir[dir.length - 1] !== '/') {
      dir += '/'; // Add trailing slash
   }

   fs.readFile(dir + 'index.html', function(error, data) {
      if (error) throw error;

      buildHTMLFile(data, dir + 'index.html');
   });

   fs.readFile(dir + 'copy.txt', function(error, data) {
      if (error && error.code === 'ENOENT') return;
      else if (error) throw error;

      var lines = data.toString().split('\n');
      for (var i = 0; i < lines.length; i ++) {
         fs.createReadStream(dir + lines[i]).pipe(fs.createWriteStream(BUILD + '/' + lines[i]));
         
         var stats = fs.statSync(dir + lines[i]);
         console.log(lines[i] + ':\t' + stats.size + ' bytes\t(' + (stats.size / 1024).toFixed(2) + ' KB)');
      }
   });
}

function buildHTMLFile(data, url) {
   var baseDir = dirFor(url);

   rmdir(BUILD);
   fs.mkdirSync(BUILD);

   var html = minify(data.toString(), {
      removeAttributeQuotes: true,
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true
   });

   var js = [];
   var scripts = html.match(/<script.*?src=((?!\/\/).)*?[ >]/g);
   var jsFilesLoading = scripts.length;
   for (var i = 0; i < scripts.length; i ++) {
      var matches = scripts[i].match(/src=(.*)[ >]/);
      if (matches[1]) {
         (function(url, index) {
            fs.readFile(url, function(err, data) {
               if (err) throw err;

               js[index] = data.toString();
               jsFilesLoading --;

               if (jsFilesLoading === 0) {
                  // Fix the HTML
                  injectScriptsAndSave(BUILD + '/index.html', html, js);
               }
            }); 
         })(baseDir + matches[1], i);
      }
      else 
         throw 'Bad regex dummy: ' + scripts[i];
   }
}

function injectScriptsAndSave(path, html, js) {
   js = js.join('\n');
   js = minifyCommonUsages(js);
   try {
      js = UglifyJS.minify(js.code, {
         warnings: true,
         fromString: true
      });
   }
   catch (e) {
      console.log('Minify error');
      fs.writeFile(BUILD + '/failure.js', js);
   }

   html = html.replace(/<script.*?src=((?!\/\/).)*? ?><\/script>/, '<script>' + js.code + '</script>');
   html = html.replace(/<script src=((?!\/\/).)*? ?><\/script>/g, '');

   console.log('index.html:\t' + html.length + ' bytes\t(' + (html.length / 1024).toFixed(2) + ' KB)');

   fs.writeFile(BUILD + '/index.html', html, function(err) {
      if (err) throw err;
   });
}

function minifyCommonUsages(source) {
   // Convert Juicy.*** to J.* for super shortness!
   if (source.match(/_J/)) {
      throw 'Source already contains a _J variable. What are you thinkin\'?';
   }
   source = source.replace(/(var |window\.)Juicy/g, '$1_J');
   source = source.replace(/Juicy([\.\[][A-Za-z])/g, '_J$1');
   
   var classes = {
      Game: 'G',
      Point: 'P',
      State: 'S',
      Entity: 'E',
      Component: 'C',
      Components: 'Cs',
   };
   for (var c in classes) {
      var find = new RegExp('\\.' + c, 'g');

      source = source.replace(find, '.' + classes[c]);
   }

   /* Legit string haxxing for ultimate space gainz
    * Original                       Minified
    * ------------------------------------------
    * this.variable = 10;         ->    this.variable=10;
    *
    *                 vs
    * 
    * var variable = 'variable';  ->    var v='variable';
    * this[variable] = 10;              this[v]=10;
    * ------------------------------------------
    * 
    * After using `variable` TWICE you've already saved data!
    */ 

   // Here are a couple common functions from JuicyJS...
   var properties = [];
   var params = [];
   var values = [];

   var lines = source.split('\n');
   var inComment = false;
   for (var i = 0; i < lines.length; i ++) {
      if (inComment) {
         if (lines[i].indexOf('*/') >= 0) {
            lines[i] = lines[i].substring(lines[i].indexOf('*/') + 2);
            inComment = false;
         }
         else {
            lines.splice(i, 1);
            i --;
         }
      }

      if (lines[i].indexOf('//') >= 0) {
         lines[i] = lines[i].substring(0, lines[i].indexOf('//'));
      }
      if (lines[i].indexOf('/*') >= 0) {
         if (lines[i].indexOf('*/') >= 0) {
            lines[i] = lines[i].substring(lines[i].indexOf('*/') + 2);
         }
         else {
            inComment = true;
            lines.splice(i, 1);
            i --;
         }
      }
   }

   var calls = {
      constructor: 0,
      toString: 0
   };
   var Property = new RegExp('[A-z\\s\\)]*\\.([A-Za-z][A-Za-z0-9_-]+)?[^A-Za-z]', 'g');
   var match;
   var src = lines.join('');
   while (match = Property.exec(src)) {
      if (match[1]) {
         calls[match[1]] = (calls[match[1]] || 0) + 1;
         Property.lastIndex -= (match[1].length - 3); // Give it a little padding
      }
   }

   var fileTypes = ['jpeg', 'jpg', 'png', 'wav', 'mp3', 'js'];
   for (var i = 0; i < fileTypes.length; i ++) {
      delete calls[fileTypes[i]];
   }

   // Calculate character savings
   var gainz = [];
   for (var property in calls) {
      if (calls[property] === 1)
         continue;

      /* 
       * Cost to add a variable to the list:
       *    (function(...,X) {
       *       ...
       *    })(...,"PROPERTY")
       *
       *    => property.length + 5
       */
      var cost = property.length + 5;
      /*
       * Gain from adding a variable:
       *    parent[c]
       *
       *    => property.length - 2
       */
      var gain = (property.length - 2) * calls[property];

      if (gain - cost <= 0) {
         // console.log(property, 'would be literally the worst. Ignoring (' + calls[property] + ' calls)');
      }
      else {
         gainz[gain - cost] = gainz[gain - cost] || [];
         gainz[gain - cost].push(property);
      }
   }

   for (var p = gainz.length - 1; p > 0; p --) {
      while (gainz[p] && gainz[p].length > 0) {
         properties.push(gainz[p].shift());
      }
   }

   // Search for every usage of .property, and see if it's worth replacing
   // this is probably pretty dang expensive.
   // var properties = source.match

   for (var i = 0; i < properties.length; i ++) {
      var search = new RegExp('\\.' + properties[i] + '([^A-z])', 'g');
      source = source.replace(search, '[_str_' + properties[i] + ']$1');

      params.push('_str_' + properties[i]);
      values.push('"' + properties[i] + '"');
   }

   // Aaaaand our two special functions
   // These are just common things I use in Juicy:
   // function(){} and document.createElement('canvas')
   source = source.replace(/function()\s*{}/g, 'noop');
   source = source.replace(/document.createElement(['"]canvas["'])/g, 'newCanvas()');
   params.push('noop');
   values.push('function(){}');
   params.push('newCanvas');
   values.push('function(){return document.createElement("canvas");}')

   source = '(function(' + params.join(',') + ') {\n' + source + '\n})(' + values.join(',') + ');';

   return {code:source};
}