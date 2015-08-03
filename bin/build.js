var fs = require('fs');
var minify = require('./mangle');
var util = require('./util');

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

var BUILD = 'dist';
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
   var baseDir = util.getDir(url);

   util.rmdir(BUILD);
   fs.mkdirSync(BUILD);

   var html = minify.html(data.toString());

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
   js = minify.Juicy(js);
   js = minify.properties(js);
   try {
      js = minify.uglify(js);
   }
   catch (e) {
      console.log('Minify error');
      fs.writeFile(BUILD + '/failure.js', js);
   }

   html = html.replace(/<script.*?src=((?!\/\/).)*? ?><\/script>/, '<script>' + js + '</script>');
   html = html.replace(/<script src=((?!\/\/).)*? ?><\/script>/g, '');

   console.log('index.html:\t' + html.length + ' bytes\t(' + (html.length / 1024).toFixed(2) + ' KB)');

   fs.writeFile(BUILD + '/index.html', html, function(err) {
      if (err) throw err;
   });
}