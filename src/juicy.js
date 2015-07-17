'use strict';

(function(context, factory) {
   if (typeof module !== "undefined" && module.exports) {
      module.exports = factory();
   } else if (typeof define === "function" && define.amd) {
      define([], factory);
   } else {
      context.Juicy = factory(context);
   }
})(this, function() {
   /* -------------------- Animation frames ----------------- */
   window = window || {};
   var requestAnimationFrame = (function() {
      return  window.requestAnimationFrame  || 
         window.webkitRequestAnimationFrame || 
         window.mozRequestAnimationFrame    || 
         window.oRequestAnimationFrame      || 
         window.msRequestAnimationFrame     || 
         function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
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

      this.mouse = { x: 0, y: 0 };

      return this; // Enable chaining
   };

   Game.prototype.setInput = function(input) {
      this.input = input;

      var self = this;

      return this; // Enable chaining
   };

   Game.prototype.getCanvasCoords = function(evt) {
      var canvasRect = this.canvas.getBoundingClientRect();
      var mx = evt.x || evt.clientX - canvasRect.left;
      var my = evt.y || evt.clientY - canvasRect.top;

      return {
         x: Math.floor(mx * this.width /  this.canvas.width), 
         y: Math.floor(my * this.height / this.canvas.height)
      };
   };

   Game.prototype.setCanvas = function(canvas) {
      this.canvas  = canvas;
      this.context = canvas.getContext('2d');

      var self = this;
      canvas.onclick = function(evt) {
         evt = self.getCanvasCoords(evt);
         self.click(evt.x, evt.y);
      }
      canvas.onmousemove = function(evt) {
         evt = self.getCanvasCoords(evt);
         self.mouse.x = evt.x;
         self.mouse.y = evt.y;
      }

      return this.resize();
   };

   Game.prototype.resize = function() {
      var parent = this.canvas.parentElement;
      var width  = parent.width || parent.clientWidth;

      this.canvas.width  = width;
      this.canvas.height = width * this.height / this.width;
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
      this.state = state;
      this.state.game = this;
      this.state.init();
      this.state.__hasRendered = false;

      return this; // Enable chaining
   };

   Game.prototype.click = function(x, y) {
      if (this.state)
         this.state.click(x, y);
   };

   Game.prototype.update = function() {
      if (!this.running)
         return;

      var self = this;
      requestAnimationFrame(function() {
         self.update();
      });
      var nextTime = new Date().getTime();
      var updated  = false;
      var dt = (nextTime - this.lastTime) / 1000;
      // Limit to 60 FPS
      if (dt < 1 / 60)
         return;

      if (this.state) {
         updated = !this.state.update(dt, this.input) || this.state.updated;
         this.state.updated = false;
      }
      this.lastTime = nextTime;

      if (updated || !this.state.__hasRendered) {
         this.render();
         this.state.__hasRendered = true;
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
      this.running = true;
      this.lastTime = new Date().getTime();

      this.update();

      return this; // Enable chaining
   };

   Game.prototype.pause = function() {
      this.running = false;
   };

   /* -------------------- Game Scene ----------------------- */
   /* 
    * new Scene() - Construct new scene
    *  [Constructor]
    *    init   ()          - Run every time the scene is swapped to.
    *  [Useful]
    *    click  (evt)       - When the user clicks the scene
    *    update (dt, input) - Run before rendering. Use for logic.
    *                         IMPORTANT: return true if you don't want to re-render
    *    render (context)   - Run after  update.    Use for graphics
    */
   var Scene = Juicy.Scene   = function() { this.entities = []; };
   Juicy.State = Juicy.Screen= Juicy.Scene;
   Scene.prototype.init      = function() {};
   Scene.prototype.click     = function(x, y) {};
   Scene.prototype.onKey     = {};
   Scene.prototype.update    = function(dt, input) {};
   Scene.prototype.render    = function(context) {};

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
   var Entity = Juicy.Entity = function(scene, components) {
      this.components = {};
      this.updated    = {};
      this.scene      = scene;

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
      if (this.dt) {
         if (this.updated[name] === 1)
            throw 'Circular component dependency: ' + name + '<>';
         else if (!this.updated[name])
            this.update(this.dt, name);
      }

      return this.components[name];
   };
   Entity.prototype.update = function(dt, name) {
      if (name) {
         this.updated[name] = 1;
         this.components[name].update(dt, this.input);
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

      for(var key in this.components)
         this.components[key].render.apply(this.components[key], args);

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

      return Juicy.Components[name] = Component.extend(protoProps, staticProps)
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

      // Reverse of KEYS
      this.CODES = {};
      for (var key in keys) {
         this.CODES[keys[key]] = key;
      }

      this.init(document);

      return this; // Enable chaining
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
      this.on('keydown', function(evt) {
         self.keyState[evt.keyCode] = true;
      });
      this.on('keyup', function(evt) {
         self.keyState[evt.keyCode] = false;

         var cb = self.keyCallbacks[evt.keyCode];
         for(var i in cb) {
            cb[i](self.CODES[evt.keyCode]);
         }
      });

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

      child.__super__ = parent.prototype;

      return child;
   };

   Game.extend = Scene.extend = Entity.extend = Component.extend = extend;
   Input.extend = extend;

   /* -------------------- Typical Components --------------- */
   Component.create('Image', {
      constructor: function(entity) {
         var self = this;

         this.image = new Image();
         this.image.onload = function() {
            entity.transform.width  = this.width;
            entity.transform.height = this.height;

            if (self.onload)
               self.onload(this);
         }

         entity.setImage = this.setImage.bind(this);
      },
      setImage: function(url) {
         this.image.src = url;

         return this;
      },
      render: function(context) {
         arguments[0] = this.image;
         context.drawImage.apply(context, arguments);
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

   Component.create('Transform', {
      constructor: function(entity) {
         this.position = { x: 0, y: 0 };
         this.scale    = { x: 1, y: 1 };

         this.width = this.height = 0;
      
         this.children = [];
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
         child.parent = this;
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

      return this.render(); // Enable chaining
   };

   Text.prototype.align = function(alignment) {
      this.alignment = alignment;

      if (['left', 'center', 'right'].indexOf(alignment) < 0)
         console.warn(alignment, 'is not a valid alignment');
   };

   Text.prototype.render = function() {
      this.context.font      = this.font;
      this.context.fillStyle = this.fillStyle;

      var size = this.context.measureText(this.text);
      size.height = parseInt(this.font, 10);

      this.canvas.width = Math.ceil(size.width);
      this.canvas.height = Math.ceil(size.height * 5 / 3);

      this.context.textBaseline = 'top';
      this.context.font      = this.font;
      this.context.fillStyle = this.fillStyle;

      this.context.fillText(this.text, 0, 0);//size.height);

      this.updated = true;

      return this;
   };

   Text.prototype.draw = function(context) {
      arguments[0] = this.canvas;

      if (this.alignment !== 'left') {
         var dx = (arguments.length < 9) ? 1 : 5;

         if (this.alignment === 'center')
            arguments[dx] -= this.canvas.width / 2;
         else if (this.alignment === 'right')
            arguments[dx] -= this.canvas.width;
      }

      context.drawImage.apply(context, arguments);

      this.updated = false;
   };

   return Juicy;
});
