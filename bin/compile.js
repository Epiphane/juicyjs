var fs = require('fs');
var minify = require('./mangle');
var util = require('./util');

var configs = {};
configs['juicy.full'] = ['juicy', 'juicy.sound', 'juicy.util'];
configs['juicy']      = ['juicy', 'juicy.sound', 'juicy.util'];
configs['juicy.lite'] = ['juicy'];

var LIB = 'lib';
function compileJS(destination, scripts, cb) {
   console.log('Compiling ' + destination);

   var js = [];
   var jsFilesLoading = scripts.length;
   for (var i = 0; i < scripts.length; i ++) {
      (function(url, index) {
         fs.readFile(url, function(err, data) {
            // console.log('      ' + url);
            if (err) throw err;

            js[index] = data.toString();
            jsFilesLoading --;

            if (jsFilesLoading === 0) {
               // Fix the HTML
               compileAndSave(destination, js, cb);
            }
         }); 
      })('src/' + scripts[i] + '.js', i);
   }
}

function compileAndSave(destination, js, cb) {
   js = js.join('\n');

   var maxlen = 20;
   var xtra = (new Array(maxlen + 4 - destination.length)).join(' ');
   
   console.log('   ' + destination + '.js:' + xtra + js.length + ' bytes\t(' + (js.length / 1024).toFixed(2) + ' KB)');
   fs.writeFile(LIB + '/' + destination + '.js', js, function(err) {
      if (err) throw err;
   });

   js = minify.Juicy(js);
   js = minify.properties(js);
   try {
      js = minify.uglify(js);
   }
   catch (e) {
      throw 'Minify error';
   }

   xtra = (new Array(maxlen - destination.length)).join(' ');

   console.log('   ' + destination + '.min.js:' + xtra + js.length + ' bytes\t(' + (js.length / 1024).toFixed(2) + ' KB)');
   fs.writeFile(LIB + '/' + destination + '.min.js', js, function(err) {
      if (err) throw err;

      cb();
   });
}

function next() {
   var keys = Object.keys(configs);
   if (keys.length > 0) {
      var key = keys[0];
      compileJS(key, configs[key], function() {
         delete configs[key];
      
         next();
      });
   }
}

util.rmdir(LIB);
fs.mkdirSync(LIB);
next();