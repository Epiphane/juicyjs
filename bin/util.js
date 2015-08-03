var fs = require('fs');
var path = require('path');

exports.rmdir = function(dir) {
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

exports.getDir = function(url) {
   return url.split('/').slice(0, -1).join('/') + '/';
}