var htmlminify = require('html-minifier').minify;
var UglifyJS = require("uglify-js");

module.exports = {
   html: function(source) {
      return htmlminify(source, {
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
   },
   uglify: function(source) {
      return UglifyJS.minify(source, {
         warnings: true,
         fromString: true
      }).code;
   },
   Juicy: function(source) {
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

      return source;
   },
   properties: function(source) {
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

      return source;
   }
}
