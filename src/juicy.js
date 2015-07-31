'use strict';

(function(context, factory) {
   if (typeof module !== "undefined" && module.exports) {
      module.exports = factory();
   } else if (typeof define === "function" && define.amd) {
      define([], factory);
   } else {
      context.Juicy = factory(context);
   }
})(this, function(context) {
   /* -------------------- Animation frames ----------------- */
   context = context || {};
   context.requestAnimFrame = (function() {
      return context.requestAnimationFrame ||
         context.webkitRequestAnimationFrame ||  
         context.mozRequestAnimationFrame    ||
         function(callback) {
            context.setTimeout(callback, 1000 / 60);
         };
      })();

   /* Base object */
   var Juicy = {};

   /* -------------------- Helper functions ----------------- */
   /*
    * Juicy.rand([min, ] max) - Return a random int between [min, max)
    */
   Juicy.rand = function(min, max) {
      if (max)
         return Math.floor(Math.random() * (max - min)) + min;
      else
         return Math.floor(Math.random() * min);
   };

   Juicy.PI = 3.1415926535;

   /* -------------------- Game Handler --------------------- */
   /* 
    * new Game(canvas, width, height) - Construct new game
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
   var Game = Juicy.Game = function(canvas, width, height) {
      this.running = false;
      this.width  = width;
      this.height = height;
      this.setCanvas(canvas);

      this.loading = false;
      this.waitingForLoad = false;

      this.mouse = { x: 0, y: 0 };

      this.DEBUG = false;

      return this; // Enable chaining
   };

   Game.prototype.setDebug = function(debug) {
      this.DEBUG = debug;
      if (debug) {
         this._fps = [];
         this._fpsLogged = 0;
      }
   };

   Game.prototype.preload = function(images, audio) {
      images = images || [];
      audio = audio || [];

      var self      = this;
      var numAssets = images.length + audio.length;
      var loaded    = 0;
      var unlock    = function() {
         loaded ++;
         if (loaded === numAssets) {
            self.loading = false;
            if (self.waitingForLoad) {
               self.waitingForLoad = false;

               self.run();
            }
         }
         else {
            self.onprogress(loaded / numAssets);
         }
      };

      // Create fancy loading screen if we don't have one
      if (!this.onprogress) {
         var size = this.canvas.width / numAssets;
         this.onprogress = function(progress) {
            var ctx = this.canvas.getContext('2d');
            ctx.fillStyle = 'rgb(' + Juicy.rand(255) + ', ' + Juicy.rand(255) + ', ' + Juicy.rand(255) + ')';
            ctx.fillRect(this.canvas.width * progress - size, 0, size, this.canvas.height);
         };
      }

      this.loading = true;
      for (var i = 0; i < images.length; i ++) {
         var img = new Image();
         img.src = images[i];
         img.onload = unlock;
      }

      for (var i = 0; i < audio.length; i ++) {
         var aud = new Audio();
         aud.src = audio[i];
         aud.oncanplaythrough = unlock;
      }
   };

   Game.prototype.setInput = function(input) {
      this.input = input;

      var self = this;

      return this; // Enable chaining
   };

   Game.prototype.getCanvasCoords = function(evt) {
      var canvasRect = this.canvas.getBoundingClientRect();
      var mx = (evt.x || evt.clientX) - canvasRect.left;
      var my = (evt.y || evt.clientY) - canvasRect.top;

      return {
         x: Math.floor(mx * this.width /  this.canvas.width), 
         y: Math.floor(my * this.height / this.canvas.height)
      };
   };

   Game.prototype.setCanvas = function(canvas) {
      this.canvas  = canvas;
      this.context = canvas.getContext('2d');

      var self = this;
      var startDrag = false;
      canvas.onmousedown = function(evt) {
         startDrag = evt;
         self.trigger('dragstart', evt)
      };
      canvas.onmouseup = function(evt) {
         var startPos = self.getCanvasCoords(startDrag);
         var endPos   = self.getCanvasCoords(evt);

         var dx = startPos.x - endPos.x;
         var dy = startPos.y - endPos.y;
         var dist = Math.sqrt(dx * dx + dy * dy);
         if (dist <= 2) {
            self.trigger('click', evt)
         }
         else {
            self.trigger('dragend', evt)
         }

         startDrag = false;
      };
      canvas.onmousemove = function(evt) {
         var pos = self.getCanvasCoords(evt);
         self.mouse.x = pos.x;
         self.mouse.y = pos.y;

         if (startDrag) {
            self.trigger('drag', evt);
         }
      }

      return this.resize();
   };

   Game.prototype.resize = function() {
      var parent = this.canvas.parentElement;
      var width  = parent.width  || parent.clientWidth;
      var height = parent.height || parent.clientHeight;

      this.canvas.width  = width;
      this.canvas.height = width * this.height / this.width;
      if (this.canvas.height > height) {
         this.canvas.height = height;
         this.canvas.width = height * this.width / this.height;
      }
      this.scale = {
         x: this.canvas.width  / this.width,
         y: this.canvas.height / this.height
      };

      // Make sure we re-render
      if (this.state)
         this.state.__hasRendered = false;
      
      return this; // Enable chaining
   };

   Game.prototype.setState = function(state) {
      if (this.input) {
         this.input.clear();
      }

      this.state = state;
      this.state.game = this;
      this.state.init();
      this.state.__hasRendered = false;

      return this; // Enable chaining
   };

   Game.prototype.trigger = function(evt, pos) {
      pos = this.getCanvasCoords(pos);
      if (this.state && this.state[evt])
         this.state[evt](pos.x, pos.y);
   };

   Game.prototype.update = function() {
      if (!this.running)
         return;

      var self = this;
      window.requestAnimFrame(function() {
         self.update();
      });
      var nextTime = new Date().getTime();
      var updated  = false;
      var dt = (nextTime - this.lastTime) / 1000;
      if (dt > 0.2) {
        this.lastTime = nextTime;
        return;
      }
      if (this.DEBUG) {
         if (this._fps.length === 30) {
            this._fps.splice(0, 1);
         }
         this._fps.push(dt);

         var tot = 0;
         for (var i = 0; i < this._fps.length; i ++) {
            tot += this._fps[i];
         }

         this.fps = this._fps.length / tot;
         if (this.fps < 50 && this._fpsLogged-- <= 0) {
            this._fpsLogged = 100; // Wait 100 frames
            console.warn('Possible bottleneck: FPS down to ', this.fps, '(', 1 / this.fps, ' sec per frame)');
         }
         else if (this._fpsLogged-- <= 0) {
            this._fpsLogged = 500; // Wait 100 frames
            console.log('FPS: ', this.fps);
         }
      }

      try {
         if (this.state) {
            updated = !this.state.update(dt, this.input) || this.state.updated;
            this.state.updated = false;
         }
         this.lastTime = nextTime;

         if (updated || !this.state.__hasRendered) {
            this.render();
            this.state.__hasRendered = true;
         }
      }
      catch (e) {
         console.error(e);
         this.running = false;
      }
   };

   Game.prototype.render = function() {
      if (!this.state) {
         this.running = false;
      }
      else {
         this.context.save();

         this.context.scale(this.scale.x, this.scale.y);
         if (!this.state.stopClear)
            this.context.clearRect(0, 0, this.width, this.height);

         try {
            this.state.render(this.context);
         } catch (err) {
            console.error(err.stack);
            this.running = false;
         }

         this.context.restore();
      }

      return this; // Enable chaining
   };

   Game.prototype.run = function() {
      if (this.loading) {
         this.waitingForLoad = true;
         return;
      }

      this.running = true;
      this.lastTime = new Date().getTime();

      this.update();

      return this; // Enable chaining
   };

   Game.prototype.pause = function() {
      this.running = false;
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
   var State = Juicy.State    = function() { this.entities = []; };
   Juicy.Scene = Juicy.Screen = Juicy.State;
   State.prototype.init       = function() {};
   State.prototype.click      = function(x, y) {};
   State.prototype.onKey      = {};
   State.prototype.update     = function(dt, input) {};
   State.prototype.render     = function(context) {};

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

      var components = components || this.__proto__.components;
      if (components.indexOf('Transform') >= 0)
         components.splice(components.indexOf('Transform'), 1);
         
      // Transform component
      this.transform = new Juicy.Components['Transform'](this);

      for (var i = 0; i < components.length; i ++) {
         this.addComponent(components[i]);
      }

      this.init();
   };
   Entity.prototype.init = function() {};
   Entity.prototype.components = [];
   Entity.prototype.addComponent = function(c, name) {
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
   Entity.prototype.getComponent = function(name) {
      if (!this.components[name]) {
         return null;
      }

      return this.components[name];
   };
   Entity.prototype.update = function(dt, name) {
      if (name) {
         this.updated[name] = 1;
         this.components[name].update(dt, this.state.game.input);
         this.updated[name] = 2;
      }
      else { // Update all
         this.dt      = dt;
         this.updated = {};
         for(var key in this.components)
            if (!this.updated[key])
               this.update(dt, key);

         delete this.dt;
      }
   };
   Entity.prototype.render = function(context) {
      context.save();
      var pos = this.transform.position;
      context.translate(pos.x, pos.y);
      context.scale(this.transform.scale.x, this.transform.scale.y);

      var args = Array.prototype.slice.call(arguments);
      if (args.length === 1) {
         args.push(0);
         args.push(0);
         args.push(this.transform.width);
         args.push(this.transform.height);
      }

      for(var key in this.components) {
         this.components[key].render.apply(this.components[key], args);
      }

      if (this.transform.children.length > 0) {
         for(var i = 0; i < this.transform.children.length; i ++) {
            this.transform.children[i].render(context);
         }

      }
      context.restore();
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
   Component.prototype.name   = null;
   Component.prototype.update = function(dt) {};
   Component.prototype.render = function(context) {};

   // Map of names to components
   Juicy.Components = {};
   Component.create = function(name, protoProps, staticProps, force) {
      protoProps.name = protoProps.name || name;
      if (Juicy.Components[name])
         console.warn('Overriding component', name);

      return Juicy.Components[name] = this.extend(protoProps, staticProps)
   };

   /* -------------------- Input manager -------------------- */
   /* 
    * new Input(document) - Construct new input manager
    *  [Constructor]
    *    init        (document)      - Initialize keydown events
    *    setKeys     (keys)          - Set Key Mappings
    *    setControls (controls)      - Set Controls (useful???)
    *  [Useful]
    *    keyDown  (key)              - Get state of a key (mapped)
    *    on       (action[, key], callback) - Register event
    *                                - Action = 'key' means on keypress
    */
   var Input = Juicy.Input = function(document, keys, controls) {
      this.KEYS     = keys;
      this.CONTROLS = controls;
      this.keyState = {};
      this.keyCallbacks = {};
      this.eventListeners = {};

      // Reverse of KEYS
      this.CODES = {};
      for (var key in keys) {
         this.CODES[keys[key]] = key;
      }

      this.init(document);

      return this; // Enable chaining
   };

   Input.prototype.clear = function() {
      this.keyCallbacks = {};

      for (var action in this.eventListeners) {
         var listeners = this.eventListeners[action];
         while (listeners.length > 0) {
            this.document.removeEventListener(action, listeners.shift());
         }
      }
      this.eventListeners = {};
   };

   Input.prototype.setKeys = function(keys) {
      this.KEYS = keys;

      return this; // Enable chaining
   };

   Input.prototype.setControls = function(controls) {
      this.CONTROLS = controls;

      return this; // Enable chaining
   };

   Input.prototype.keyDown = function(key) {
      if (typeof(key) === 'string')
         return this.keyState[this.KEYS[key]];
      else {
         for (var k = 0; k < key.length; k ++) {
            if (this.keyDown(key[k]))
               return true;
         }

         return false;
      }
   };

   Input.prototype.init = function(document) {
      this.document = document;
      this.onkey = [];

      var self = this;
      document.onkeydown = function(evt) {
         self.keyState[evt.keyCode] = true;
      };
      document.onkeyup = function(evt) {
         self.keyState[evt.keyCode] = false;

         var cb = self.keyCallbacks[evt.keyCode];
         for(var i in cb) {
            cb[i](self.CODES[evt.keyCode]);
         }
      };

      return this; // Enable chaining
   };

   Input.prototype.on = function(action, keys, callback) {
      var self = this;

      if (action === 'key') {
         if (typeof(keys) !== 'object')
            keys = [keys];

         for (var i = 0; i < keys.length; i ++) {
            var key = keys[i];
            console.log('callback for',key,this.KEYS[key]);

            this.keyCallbacks[this.KEYS[key]] = this.keyCallbacks[this.KEYS[key]] || [];
            this.keyCallbacks[this.KEYS[key]].push(callback);
         }
      }
      else {
         this.document.addEventListener(action, keys);

         this.eventListeners[action] = this.eventListeners[action] || [];
         this.eventListeners[action].push(keys);
      }

      return this; // Enable chaining
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
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate;

      if (protoProps)
         combine(child.prototype, protoProps);

      child.prototype.__super__ = parent.prototype;

      return child;
   };

   Game.extend = State.extend = Entity.extend = Component.extend = extend;
   Input.extend = extend;

   /* -------------------- Typical Components --------------- */
   Component.create('Image', {
      constructor: function(entity) {
         var self = this;

         this._tint = false;
         this.opacity = 1;

         this.image = new Image();
         this.image.onload = function() {
            if (!entity.transform.width && !entity.transform.height) {
               entity.transform.width  = this.width;
               entity.transform.height = this.height;
            }

            entity.state.updated = true;

            if (self._tint) {
               self.setTint(self._tint);
            }

            if (self.onload) {
               self.onload(this);
            }
         }

         entity.setImage = this.setImage.bind(this);
      },
      setTint: function(tint) {
         // TODO glean alpha of tint
         this._tint = tint;

         if (this.image.complete) {
            // Apply tint
            if (!this.overlay) {
               this.overlay = document.createElement('canvas');
            }

            this.overlay.width = this.image.width;
            this.overlay.height = this.image.height;

            var context = this.overlay.getContext('2d');

            context.fillStyle = this._tint;
            context.fillRect(0, 0, this.overlay.width, this.overlay.height);

            // destination atop makes a result with an alpha channel identical to fg,
            // but with all pixels retaining their original color *as far as I can tell*
            context.globalCompositeOperation = "destination-atop";
            context.globalAlpha = 0.75;
            context.drawImage(this.image, 0, 0);
            context.globalAlpha = 1;
         }
      },
      setImage: function(url, tint) {
         this.image.src = url;

         this.tint = tint || this.tint

         return this;
      },
      render: function(context, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
         var originalAlpha   = context.globalAlpha;
         context.globalAlpha = this.opacity;
         arguments[0] = this.image;
         context.drawImage.apply(context, arguments);

         if (this._tint) {
            arguments[0] = this.overlay;
            context.drawImage.apply(context, arguments);
         }
         context.globalAlpha = originalAlpha;
      }
   });

   Component.create('Box', {
      constructor: function(entity) {
         this.fillStyle = 'white';
      },
      render: function(context, x, y, w, h) {
         context.fillStyle = this.fillStyle;
         // var transform = this.entity.transform;
         // var pos = transform.getPosition();
         // var sc  = transform.getScale();
         // context.fillRect(x || pos.x, y || pos.y, 
         //                  w || sc.x * transform.width, 
         //                  h || sc.y * transform.height);
         context.fillRect(x, y, w, h);
      }
   });

   Component.create('Text', {
      constructor: function(entity) {
         this.text = new Juicy.Text();
      },
      set: function(config) {
         this.text.set(config);

         this.entity.transform.width  = this.text.canvas.width;
         this.entity.transform.height = this.text.canvas.height;
      },
      align: function(alignment) {
         this.text.align(alignment);
      },
      render: function(context) {
         this.text.render(context, 0, 0);
      }
   });

   Component.create('Transform', {
      constructor: function(entity) {
         this.position = { x: 0, y: 0 };
         this.scale    = { x: 1, y: 1 };

         this.width = this.height = 0;
      
         this.children = [];
         this.entity = entity;
      },
      contains: function(x, y) {
         var pos = this.getPosition();
         var scale = this.getScale();
         if (x >= pos.x && y >= pos.y &&
             x <= pos.x + this.width  * scale.x &&
             y <= pos.y + this.height * scale.y)
            return true;
         else
            return false;
      },
      distance: function(other) {
        var dx = (other.position.x + other.width / 2) - (this.position.x + this.width / 2);
        var dy = (other.position.y + other.height / 2) - (this.position.y + this.height / 2);

        return Math.sqrt(dx * dx + dy * dy);
      },
      collides: function(other) {
         var isLeft  = other.position.x >= this.position.x + this.width;
         var isRight = other.position.x + other.width <= this.position.x;
         var isAbove = other.position.y >= this.position.y + this.height;
         var isBelow = other.position.y + other.height <= this.position.y;

         return !isLeft && !isRight && !isAbove && !isBelow;
      },
      getPosition: function() {
         if (this.parent) {
            var pos = this.parent.getPosition();
            var sc = this.parent.getScale();
            return {
               x: pos.x + this.position.x * sc.x,
               y: pos.y + this.position.y * sc.y
            };
         }
         else
            return this.position;
      },
      getScale: function() {
         if (this.parent) {
            var sc = this.parent.getScale();
            return {
               x: sc.x * this.scale.x,
               y: sc.y * this.scale.y
            };
         }
         else
            return this.scale;
      },
      addChild: function(child) {
         child.parent           = this.entity;
         child.transform.parent = this;
         this.children.push(child);
      }
   });

   /* -------------------- Game Text ------------------------ */
   /* 
    * new Text([text, [font, [fillStyle, [alignment]]]]) - Construct new text
    *  [Useful]
    *    set   (cfg)   - Set text, font, or fillStyle. Re-renders text
    *    align (left|center|right) - Do I have to explain?
    *    render()      - Automatically called whenever
    *
    *  [Same as context.drawImage]
    *    draw  (context, [sx, sy, sWidth, sHeight],
    *           dx, dy, [dWidth, dHeight])
    */
   var Text = Juicy.Text = function(text, font, fillStyle, alignment) {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');

      font = font || '32px Arial';
      text = text || '';
      fillStyle = fillStyle || 'white';

      this.align(alignment || 'left');

      this.opacity = 1;

      return this.set({
         text:      text,
         font:      font,
         fillStyle: fillStyle
      }); // Enable chaining
   };

   Text.prototype.set = function(cfg) {
      if (cfg.text)
         this.text      = cfg.text;
      if (cfg.font)
         this.font      = cfg.font;
      if (cfg.fillStyle)
         this.fillStyle = cfg.fillStyle;

      return this.draw(); // Enable chaining
   };

   Text.prototype.align = function(alignment) {
      this.alignment = alignment;

      if (['left', 'center', 'right'].indexOf(alignment) < 0)
         console.warn(alignment, 'is not a valid alignment');
   };

   Text.prototype.draw = function() {
      this.context.font      = this.font;
      this.context.fillStyle = this.fillStyle;

      var size = this.context.measureText(this.text);
      size.height = parseInt(this.font, 10);

      this.canvas.width = Math.ceil(size.width);
      this.canvas.height = Math.ceil(size.height * 5 / 3);

      this.context.textBaseline = 'top';
      this.context.font      = this.font;
      this.context.fillStyle = this.fillStyle;

      this.context.fillText(this.text, 0, 0);

      if (this.entity && this.entity.state) {
         this.entity.state.updated = true;
      }

      return this;
   };

   Text.prototype.render = function(context, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
      arguments[0] = this.canvas;

      if (this.alignment !== 'left') {
         var dx = (arguments.length < 9) ? 1 : 5;

         if (this.alignment === 'center')
            arguments[dx] -= this.canvas.width / 2;
         else if (this.alignment === 'right')
            arguments[dx] -= this.canvas.width;
      }

      var originalAlpha = context.globalAlpha;
      context.globalAlpha = this.opacity;

      context.drawImage.apply(context, arguments);

      context.globalAlpha = originalAlpha;
   };

   return Juicy;
});
