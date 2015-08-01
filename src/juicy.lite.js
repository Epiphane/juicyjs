'use strict';

/*
 * NOTE: Only works with HTML5 Canvas
 * (Like you use anything else anyway...)
 */
(function(window, document) {
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
   var newCanvas= function() { return document.createElement('canvas'); };
   var proto    = 'prototype';
   var listener = 'listener';
   var _width   = 'width';
   var _height  = 'height';
   var _canvas  = 'canvas';
   var _context = 'context';
   var __hasRendered = '_hR';

   // Used by components
   var fillStyle   = 'fillStyle';
   var font        = 'font';
   var text        = 'text';
   var opacity     = 'opacity';
   var globalAlpha = 'globalAlpha'; 
   var _tint       = '_tint';
   var drawImage   = 'drawImage';

   /* -------------------- Animation frames ----------------- */
   var requestAnimationFrame = (function() {
      return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||  
         window.mozRequestAnimationFrame    ||
         function(callback) {
            window.setTimeout(callback, 1000 / 60);
         };
      })();

   /* Base object */
   var Juicy = window.J = window.Juicy = {};

   /* ---------------- Helper functions NO MORE ------------- */

   /* -------------------- Game Handler --------------------- */
   /* 
    * init(canvas, width, height) - Construct new game
    *  [Helper]
    *    getCoords(event)         - Compute relative location
    *    update   ()              - Update game logic
    *    render   ()              - Render game objects
    *  [Constructor]
    *    setCanvas(canvas)        - Set HTML canvas element
    *    setInput (input_handler) - Set input manager
    *  [Useful]
    *    setState (state)         - Set running game state
    *    resize   ()              - Automatically resize canvas
    *    run      ()              - Begin game running
    */
   var Game = Juicy.Game = {};
   var Game_running = false;
   var Game_scale = { x: 1, y: 1 };
   var Game_mouse = { x: 0, y: 0 };
   var Game_state;
   var Game_canvas, Game_context;
   var Game_lastTime;

   // Set up document-wide input for game
   var keyState = {};
   var KEYS     = {};
   var CODES    = {};
   var listener = {};
   var currentGame = false;
   document.onkeydown = function(evt) {
      keyState[evt.keyCode] = true;
   };
   document.onkeyup = function(evt) {
      keyState[evt.keyCode] = false;

      var method = 'key_' + CODES[evt.keyCode];
      if (Game_state && Game_state[method])
         Game_state[method](CODES[evt.keyCode]);
   };

   Game.init = function(canvas, width, height, keys) {
      Game_running = false;
      Game[_width]   = width;
      Game[_height]  = height;
      Game.setCanvas(canvas);

      // Input stuff
      KEYS     = keys;
      CODES    = {};
      for (var key in keys) {
         CODES[keys[key]] = key;
      }

      // Don't enable chaining
   };

   Game.keyDown = function(key) {
      if (typeof(key) === 'string')
         return keyState[KEYS[key]];
      else {
         for (var k = 0; k < key.length; k ++) {
            if (Game.keyDown(key[k]))
               return true;
         }

         return false;
      }
   };

   Game.on = function(action, keys, callback) {
      if (action === 'key') {
         if (typeof(keys) !== 'object')
            keys = [keys];

         for (var i = 0; i < keys.length; i ++) {
            var key = keys[i];

            Game_state['key_' + key] = callback;
         }
      }
      else {
         if (listener[action]) {
            document.removeEventListener(action, listener[action]);
         }

         document.addEventListener(action, listener[action] = keys);
      }

      // Don't enable chaining
   };

   Game.clear = function() {
      for (var action in listener) {
         document.removeEventListener(action, listener[action]);
      }
      listener = {};
   };

   Game.getCanvasCoords = function(evt) {
      var canvasRect = Game_canvas.getBoundingClientRect();
      var mx = evt.clientX - canvasRect.left;
      var my = evt.clientY - canvasRect.top;

      return {
         x: Math.floor(mx * Game[_width] /  Game_canvas[_width]), 
         y: Math.floor(my * Game[_height] / Game_canvas[_height])
      };
   };

   Game.setCanvas = function(canvas) {
      Game_canvas  = canvas;
      Game_context = canvas.getContext('2d');

      var startDrag = false;
      canvas.onmousedown = function(evt) {
         startDrag = evt;
         Game.trigger('dragstart', evt);
      };
      canvas.onmouseup = function(evt) {
         var startPos = Game.getCanvasCoords(startDrag);
         var endPos   = Game.getCanvasCoords(evt);

         var dx = startPos.x - endPos.x;
         var dy = startPos.y - endPos.y;
         var dist = Math.sqrt(dx * dx + dy * dy);
         if (dist <= 2) {
            Game.trigger('click', evt);
         }
         else {
            Game.trigger('dragend', evt);
         }

         startDrag = false;
      };
      canvas.onmousemove = function(evt) {
         var pos = Game.getCanvasCoords(evt);
         Game_mouse.x = pos.x;
         Game_mouse.y = pos.y;

         if (startDrag) {
            Game.trigger('drag', evt);
         }
      }

      Game.resize();
      // Don't enable chaining
   };

   Game.resize = function() {
      var parent = Game_canvas.parentElement;
      var width  = parent[_width]  || parent.clientWidth;
      var height = parent[_height] || parent.clientHeight;

      Game_canvas[_width]  = width;
      Game_canvas[_height] = width * Game[_height] / Game[_width];
      if (Game_canvas[_height] > height) {
         Game_canvas[_height] = height;
         Game_canvas[_width] = height * Game[_width] / Game[_height];
      }
      Game_scale = {
         x: Game_canvas[_width]  / Game[_width],
         y: Game_canvas[_height] / Game[_height]
      };

      // Make sure we re-render
      if (Game_state)
         Game_state[__hasRendered] = false;
      
      // Don't enable chaining
   };

   Game.setState = function(state) {
      Game.clear();

      Game_state = state;
      Game_state.game = Game;
      Game_state.init();
      Game_state[__hasRendered] = false;

      // Don't enable chaining
   };

   Game.trigger = function(evt, pos) {
      pos = Game.getCanvasCoords(pos);
      if (Game_state && Game_state[evt])
         Game_state[evt](pos.x, pos.y);
   };

   Game.update = function() {
      if (!Game_running)
         return;

      requestAnimationFrame(Game.update);
      var nextTime = new Date().getTime();
      var dt = (nextTime - Game_lastTime) / 1000;
      if (dt > 0.2) {
        Game_lastTime = nextTime;
        return;
      }

      try {
         var updated = !Game_state.update(dt, Game) || Game_state.updated;
         Game_state.updated = false;
         
         Game_lastTime = nextTime;

         if (updated || !Game_state[__hasRendered]) {
            Game.render();
            Game_state[__hasRendered] = true;
         }
      }
      catch (e) {
         console.error(e);
         Game.pause();
      }
   };

   Game.render = function() {
      Game_context.save();

      Game_context.scale(Game_scale.x, Game_scale.y);
      if (!Game_state.stopClear)
         Game_context.clearRect(0, 0, Game[_width], Game[_height]);

      try {
         Game_state.render(Game_context);
      } catch (err) {
         console.error(err.stack);
         Game.pause();
      }

      Game_context.restore();

      // Don't enable chaining
   };

   Game.run = function() {
      Game_running = true;
      Game_lastTime = new Date().getTime();

      Game.update();

      // Don't enable chaining
   };

   Game.pause = function() {
      Game_running = false;
   };

   /* -------------------- Game State ----------------------- */
   /* 
    * new State() - Construct new state
    *  [Constructor]
    *    init   ()          - Run every time the state is swapped to.
    *  [Useful]
    *    click  (evt)       - When the user clicks the state
    *    update (dt, input) - Run before rendering. Use for logic.
    *                         IMPORTANT: return true if you don't want to re-render
    *    render (context)   - Run after  update.    Use for graphics
    */
   var State = Juicy.State = function() {};
   State[proto].init       = function() {};
   State[proto].update     = function(dt, input) {};
   State[proto].render     = function(context) {};

   /* -------------------- Game Entity ----------------------- */
   /* 
    * new Entity(components) - Construct new entity
    *  [Static Properties]
    *    components       - Array of component constructors
    *  [Constructor]
    *    addComponent (c[, name]) - Add a component to the entity
    *  [Useful]
    *    getComponent (c) - Get an (updated) component.
    *    update (dt, c)   - Calls update on all components, or just c
    *    render (context) - Calls render on all components
    */
   var untitledComponents = 0;
   var Entity = Juicy.Entity = function(state, components) {
      this.components = {};
      this.updated    = {};
      this.state      = state;
      this.children   = [];

      components = components || this.__proto__.components;
         
      // Transform component
      this.position = { x: 0, y: 0 };
      this.scale    = { x: 1, y: 1 };
      this[_width] = this[_height] = 0;

      for (var i = 0; i < components.length; i ++) {
         this.addComponent(components[i]);
      }

      if (this.init)
         this.init();
   };
   Entity[proto].components = [];
   Entity[proto].addComponent = function(c, name) {
      if (typeof(c) === 'function')
         c = new c(this);
      else if (typeof(c) === 'string') {
         if (Juicy.Components[c])
            c = new Juicy.Components[c](this);
         else
            throw 'Component ' + c + ' does not exist';
      }

      if (!c.__proto__.name) {
         c.__proto__.name = '_component_' + untitledComponents.toString();
         untitledComponents ++;
      }

      var name = name || c.__proto__.name;
      if (this.components[name])
         throw 'Component ' + name + ' already exists';
      else {
         c.entity = this;
         this.components[name] = c;
      }
   };
   Entity[proto].getComponent = function(name) {
      return this.components[name];
   };
   Entity[proto].update = function(dt, name) {
      if (name && !this.updated[name]) {
         this.updated[name] = true;
         this.components[name].update(dt, this.state.game);
         return this.components[name];
      }
      else { // Update all
         this.updated = {};
         for(var key in this.components) {
            if (!this.updated[key]) {
               this.update(dt, key);
            }
         }
      }
   };
   Entity[proto].render = function(context) {
      context.save();
      var pos = this.position;
      context.translate(pos.x, pos.y);
      context.scale(this.scale.x, this.scale.y);

      var args = Array[proto].slice.call(arguments);
      if (args.length === 1) {
         args.push(0);
         args.push(0);
         args.push(this[_width]);
         args.push(this[_height]);
      }

      for(var key in this.components) {
         this.components[key].render.apply(this.components[key], args);
      }

      if (this.children.length > 0) {
         for(var i = 0; i < this.children.length; i ++) {
            this.children[i].render(context);
         }

      }
      context.restore();
   };
   Entity[proto].addChild = function(child) {
      child.parent = this;
      this.children.push(child);
   };

   /* -------------------- Game Component -------------------- */
   /* 
    * new Component(entity) - Construct new component on an entity
    *  [Static Properties]
    *    name             - Name of the component
    *  [Useful]
    *    update (dt)      - Update component (if applicable)
    *    render (context) - Render component (if applicable)
    * 
    * Component.create(name, prototype, static[, force]) 
    *    - Extend and register by name. Force to override another component
    */
   var Component = Juicy.Component = function(entity) {};
   Component[proto].name   = null;
   Component[proto].update = function(dt) {};
   Component[proto].render = function(context) {};

   // Map of names to components
   Juicy.Components = {};
   Component.create = function(name, protoProps, staticProps) {
      protoProps.name = protoProps.name || name;

      return Juicy.Components[name] = this.extend(protoProps, staticProps)
   };

   /* Credit to Underscore.js */
   var combine = function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;

      for (var index = 1; index < length; index++) {
         var source = arguments[index];
         for (var key in source) {
            obj[key] = source[key];
         }
      }
      return obj;
   };

   /* Credit to Backbone.js */
   var extend = function(protoProps, staticProps) {
      var parent  = this;
      var child;

      protoProps  = protoProps  || {};
      staticProps = staticProps || {};

      if (Object.keys(protoProps).indexOf('constructor') >= 0)
         child = protoProps.constructor;
      else
         child = function() { return parent.apply(this, arguments); };

      combine(child, parent, staticProps);

      var Surrogate = function(){ this.constructor = child; };
      Surrogate[proto] = parent[proto];
      child[proto] = new Surrogate;

      if (protoProps)
         combine(child[proto], protoProps);

      child[proto].__super__ = parent[proto];

      return child;
   };

   State.extend = Entity.extend = Component.extend = extend;

   /* -------------------- Typical Components --------------- */
   Component.create('Image', {
      constructor: function(entity) {
         var self = this;

         this[_tint] = false;
         this.opacity = 1;

         this.image = new Image();
         this.image.onload = function() {
            if (!entity[_width] && !entity[_height]) {
               entity[_width]  = this[_width];
               entity[_height] = this[_height];
            }

            if (self[_tint]) {
               self.setTint(self[_tint]);
            }

            if (self.onload) {
               self.onload(this);
            }
         }
         this.image.onerror = function() {
            self.image = new Image();
         }

         entity.setImage = this.setImage.bind(this);
      },
      setTint: function(tint) {
         // TODO glean alpha of tint
         this[_tint] = tint;

         if (this.image.complete) {
            // Apply tint
            var canvas = this[_canvas] = this[_canvas] || newCanvas('canvas');

            canvas[_width] = this.image[_width];
            canvas[_height] = this.image[_height];

            var context = canvas.getContext('2d');

            context[fillStyle] = this[_tint];
            context.fillRect(0, 0, canvas[_width], canvas[_height]);

            // destination atop makes a result with an alpha channel identical to fg,
            // but with all pixels retaining their original color *as far as I can tell*
            context.globalCompositeOperation = "destination-atop";
            context[globalAlpha] = 0.75;
            context[drawImage](this.image, 0, 0);
            context[globalAlpha] = 1;
         }

         return this; // Enable chaining
      },
      setImage: function(url, tint) {
         this.image.src = url;

         return this; // Enable chaining
      },
      render: function(context, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
         var originalAlpha = context[globalAlpha];
         var args          = arguments;

         context[globalAlpha] = this[opacity];
         args[0] = this.image;
         context[drawImage].apply(context, args);

         if (this[_tint]) {
            args[0] = this[_canvas];
            context[drawImage].apply(context, args);
         }

         // Restore original global alpha
         context[globalAlpha] = originalAlpha;
      }
   });

   Component.create('Box', {
      constructor: function(entity) {
         this[fillStyle] = 'white';
      },
      render: function(context, x, y, w, h) {
         context[fillStyle] = this[fillStyle];
         context.fillRect(x, y, w, h);
      }
   });

   Component.create('Text', {
      constructor: function() {
         this[_canvas] = newCanvas('canvas');
         this[_context] = this[_canvas].getContext('2d');

         // Text info
         var info = this[text] = {};

         info[font] = '32px Arial';
         info[text] = '';
         info[fillStyle] = 'white';
         
         // For accessing outside of this component
         this[opacity] = 1;
      },
      set: function(config) {
         var info    = this[text];
         var entity  = this.entity;
         var context = this[_context];
         var canvas  = this[_canvas];

         // Set attributes
         info[font] = config.font           || info[font];
         info[text] = config.text           || info[text];
         info[fillStyle] = config.fillStyle || info[fillStyle];

         // Measure the text size
         context[font]      = info[font];
         context[fillStyle] = info[fillStyle];
         var size = context.measureText(info[text]);

         // Resize canvas
         entity[_width]  = canvas[_width] = Math.ceil(size[_width]);
         entity[_height] = canvas[_height] = Math.ceil(parseInt(info[font]) * 5 / 3);

         // Draw text
         context.textBaseline = 'top';
         context[font]        = info[font];
         context[fillStyle]   = info[fillStyle];
         context.fillText(info[text], 0, 0);
      },
      render: function(context) {
         var info   = this[text];
         var entity = this.entity;

         // Save original alpha
         var originalAlpha = context[globalAlpha];
         context[globalAlpha] = this[opacity];

         arguments[0] = this[_canvas];
         context[drawImage].apply(context, arguments);

         context[globalAlpha] = originalAlpha;
      }
   });
})(window, document);
