# JuicyJS
### A Minimalist Game Engine framework for all your jammin' needs

[Documentation](#documentation)
- [Game](#game)
- [Input](#input)
- [Scene](#scene-state-or-screen)
- [Entity](#entity)
- [Component](#component)
- [Provided Components](#provided-components)

JuicyJS was designed to alleviate a lot of the problems I run into while prototyping Javascript games. Namely, most engines are way too complex for what I need, and the learning curve makes it more cumbersome to get something off the ground than necessary. In the end, I end up hacking together something basic in HTML5 anyway.

I created JuicyJS to compile the simplest HTML5 patterns that I find myself following, and hardly more. Instead, a lot of programming is left up to you to hack together, so you don't have to spend hours studying a new framework.

JuicyJS isn't a huge multi-platform, do-it-all game engine, and it won't be. Use something else that's more robust and designed with that in mind. JuicyJS is good for hacking together something for a game jam, when you want to hit the ground running.

## Documentation

When you include ```juicy.js```, a global variable ```Juicy``` is created.

The ```Juicy``` namespace contains all the following:
- [Game](#game)
- [Input](#input)
- [Scene](#scene-state-or-screen)
- [Entity](#entity)
- [Component](#component)
- [Provided Components](#provided-components)

### Game

```Juicy.Game``` is where it all begins. Here's the flow:

```
var canvas     = /* canvas pulled from document */
var input      = /* Juicy.Input instance, see below */
var firstState = /* Juicy.State instance, see below */

var myGame = Juicy.Game.init(canvas, game_width, game_height, {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ACTION: 32 // Space
}); // e.g. 1024x768
myGame.setInput(input);
myGame.setState(firstState).run(); // Kick off the game!
```

#### Input

You can add or poll events using the following:

```
var isUpPressed = game.keyDown('UP');
var isArrowPressed = game.keyDown(['UP', 'DOWN', 'LEFT', 'RIGHT']);

game.on('key', 'A', function(key) {
  // key === 'A'
});
game.on('key', ['A', 'B'], function(key) {
  ...
});
```

### Scene, State, or Screen

All three names do the same thing. Depending how you feel, you can use a variety of the same. It doesn't matter. ```Juicy.State``` is the intended name. This is like a Scene in Unity or a level in most games, and it handles all the logic of its state. 

IMPORTANT: `Juicy.State` DOES NOT decide what to render. That's totally up to you.

Example:
```
var myState = Juicy.State.extend({
  constructor: function() {
    // Called when you use "new myState()"
  },
  init: function() {
    // Called when you use "game.setState(state)"
    // Use this.game to refer to the game object
  },
  click: function(x, y) { ... },
  update: function(dt, input) {
    // Called every frame to update the game
    
    // Return true or set this.udpated = true if you want to skip rendering
    // (because the state hasn't changed, for example)
  },
  render: function(context) {
    // Called every frame you want to render
  }
});
```

### Entity

`Juicy.Entity` is a wrapper for a specific object in a `Juicy.Scene`. It doesn't have to update, or even render, but it's a wrapper for `Juicy.Component`s.

Examples:

```
// Create a Juicy.Entity object with certain components
var anotherEntity = new Juicy.Entity(state, ['ComponentName', ComponentObject, ...]);

// Create a MyCustomEntity class with certain components
var MyCustomEntity = Juicy.Entity.extend({
  components: ['ComponentName', ComponentObject, ...],
  init: function() {
    // Called after all components have been initialized
  }
});
```

Other parts of `Juicy.Entity` (previously `Juicy.Components.Transform`):
  - `entity.contains(x, y)` - Is this point within the bounding box?
  - `entity.position.x`
  - `entity.position.y`
  - `entity.scale.x`
  - `entity.scale.y`
  - `entity.width`
  - `entity.height`

### Component

`Juicy.Component` is a wrapper for game logic that is done for a specific entity. For example, movement might be done by a `MovementComponent`, or animation by an `AnimationComponent`.

`Juicy.Component`s may be `extend`ed and passed around as an object, or `create`d and saved in the global `Juicy` namespace. Usually, you want to use `create`, so you can reference components by name.

Examples:

```
var myComponent = myEntity.getComponent('MyComponent'); // Work with a specific component

Juicy.Component.create('MyCustomComponent', {
  constructor: function(entity) {
    // Called whenever a MyCustomComponent is created.
    // The entity usually isn't connected to anything, so don't
    // try to access the scene from here.
  },
  update: function(dt, input) {
    // Called whenever the entity is updated.
  },
  render: function(context) {
    // Draw anything relevant to this component
  }
});
```

#### Provided Components

```Juicy``` comes with some default components. Here's what you can do out of the box:
- `Box`: Handles simple visual representation of an object's position and size
  - `box.fillStyle` - Color to fill box
  - `box.render(context, x, y, w, h)` - Usually called automatically, but just for reference
- `Image`: Like an image version of `Box`
  - `image.setImage(url)` - Load an image
  - `image.onload` - callback for when the image is ready
  - `image.render(context)`
- `Text`: Attaches some text to the entity at the entity's anchor point (aka position)
  - `text.set(config)` - Set the text, font, or fillStyle of some text
  - `text.render(context)`

