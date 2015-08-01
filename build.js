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
   js = UglifyJS.minify(js.join('\n'), {
      warnings: true,
      fromString: true
   });

   html = html.replace(/<script.*?src=((?!\/\/).)*? ?><\/script>/, '<script>' + js.code + '</script>');
   html = html.replace(/<script src=((?!\/\/).)*? ?><\/script>/g, '');

   console.log('index.html:\t' + html.length + ' bytes\t(' + (html.length / 1024).toFixed(2) + ' KB)');

   fs.writeFile(BUILD + '/index.html', html, function(err) {
      if (err) throw err;
   });
}

function buildJSFile(data, url) {
   console.log(data.toString());
   console.log(url);
}