// Call this to create a "Scene". These are the main
// states that your game can be in. Calling extend()
// just makes sure that all the necessary data is in
// place for the game to use.
var GameScreen = Juicy.State.extend({


   // This function is called when you say:
   // var state = new GameScreen();
   // Since it's just a constructor, you can't
   // reference things like this.game yet or anything
   constructor: function() {


      // Create a new Entity with the 'Image' Component
      // Image is a basic component of Juicy Engine.
      // It basically fills up the entire bounding box of this entity
      // with a specific image you set
      this.pic = new Juicy.Entity(this, ['Image']);
      this.pic.position.x = 300;
      this.pic.getComponent('Image').setImage('doge.jpeg');      

      // This is virtually the same, as an example of a custom entity
      this.dude = new Dude(this);
      this.dude.position.x = 10;
      this.dude.position.y = 10;

      // Of course you can change that color;
      this.dude.getComponent('Box').fillStyle = 'green';

      

      // Another feature is Juicy.Text. You can initialize it with
      // any amount of parameters, in the order [text, font, color, alignment]
      // If you want to change these later, use text.set(...);
      this.title = new Juicy.Entity(this, ['Text']);
      this.title.getComponent('Text').set({
         text: 'Hello!', 
         font: '40pt Arial',
         fillStyle: 'white'
      });
      this.sub = new Juicy.Entity(this, ['Text']);
      this.sub.getComponent('Text').set({
         text: 'Welcome to JuicyJS!'
      });



      // Another basic entity. This one uses our Custom component
      // defined in src/components.custom.js
      this.dudeWithComponent = new Juicy.Entity(this, ['Custom', 'Text']);
      this.dudeWithComponent.position.x = 100;
      this.dudeWithComponent.position.y = 300;
   },

   // init is called whenever the state is swapped to.
   // For example: CurrentGame.setState(NEW_STATE)
   // calls NEW_STATE.init()
   // You can start referencing this.game at this point
   init: function() {


      // We can also add components later on too!
      // These components are never used, but you can add them
      // by name (if they're created already), or you can
      // design a brand spankin' new component on the fly too
      this.dudeWithComponent.addComponent(Juicy.Component.extend({
         constructor: function() { console.log('I got initialized later!'); }
      }));


      // Random variable for use later
      this.lastButton = '';


      // Now we set up input. Notice I use a 'self' variable so that when we enter
      // the callback we're still referring to the correct `this`
      // (JS encapsulation is literally the worst) 
      var self = this;

      // Define a callback to be used whenever 'W', 'A', 'S', or 'D' is pressed
      // These keys are defined in main.js
      this.game.on('key', ['W', 'A', 'S', 'D'], function(key) {


         // Notice I use self instead of this. `this` refers to god knows what
         // since we're in a different function scope, so we want to refer to 
         // our actual state variable
         self.myCustomFunction(key);
      });

      // Load jump sound
      Juicy.Sound.load('jump', 'fx_jump.mp3');
   },

   key_UP: function() {
      console.log('up!');

      Juicy.Sound.play('jump');
   },

   // click is called whenever the scene gets clicked on
   // x and y are always scaled, so they will be from [0, GAME_WIDTH] and [0, GAME_HEIGHT]
   click: function(x, y) {
      console.log(x, y);
   },


   // This is the function we call earlier. It's totally custom
   // and added as a member function to GameScreen
   myCustomFunction: function(input) {
      // Text is buffered on a separate slate, so this actually renders it
      // in the background.
      this.title.getComponent('Text').set({
         text: 'Hello! You pressed ' + input
      });

      // this.updated is interesting. it tells the engine whether anything
      // has changed since the last frame. If it's false, then nothing is
      // re-rendered. It's good for keeping the game less heavy on simple stuff
      // like the title screen, which doesn't change often.
      this.updated = true;
   },


   // update() is called every friggin' frame. This is your typical
   // update loop function. dt = time in seconds
   update: function(dt, input) {



      // Check every frame to see whether UP is pressed
      // 'UP' is defined in main.js, when the input is created.
      // This is good for continuous things, such as movement.
      // console.log(input.keyDown('UP'));
      if (input.keyDown('UP')) {
         this.lastButton = '^';
         this.updated = true;

         // Get the Custom component on dudeWithComponent and call a function
         this.dudeWithComponent.getComponent('Custom').increment();
      }

      // Tell an entire entity to update! This would call update()
      // on each component. (Parameters: dt, input) just like this update
      this.dudeWithComponent.update(dt);
      this.dudeWithComponent.getComponent('Text').set({
         text: this.dudeWithComponent.getComponent('Custom').val
      });


      // If we returned true here, then that would tell the game engine
      // nothing changed. By default, it assumes you mean false and just
      // calls a render anyway. I wouldn't worry about it too much
      return !this.updated;
   },


   // FINALLY. render() draws whatever you want to draw.
   render: function(context) {

      // This calls render() on every component in this.dude.
      // Everything is transformed relative to the player, so if
      // your dude is at x=1000, then everything will be drawn
      // at x=1000 with no extra work on your part!
      this.dude.render(context);
      this.pic.render(context);

   
      // Draw our text
      this.title.render(context, (this.game.width - this.title.width) / 2, 100);
      this.sub.render(context, 200, 160);


      // Draw another dude.
      this.dudeWithComponent.render(context);
   }
});