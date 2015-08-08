(function(window) {
   var api = JSONAPI();

   var common = api.common;
   delete api.common;

   var Json = JSON.stringify(api);
   Json = Json.replace(/"common\.(.*?)"/g, function(match, property) {
      return JSON.stringify(common[property]);
   });

   window.api = JSON.parse(Json);
})(window);

function JSONAPI() {
   // This is actually 100% JSON
   return {
      "title": "JuicyJS API Reference",
      "subtitle": "In sweet JS form!",
      "common": {
         "extend": {
            "description": "Return an extended class, with specified properties added or overridden",
            "parameters": [
               {
                  "name": "properties",
                  "type": "object",
                  "description": "Member functions of the new class"
               },
               {
                  "name": "static_properties",
                  "type": "object",
                  "description": "Static functions of the new class"
               }
            ]
         },
         "point_event": {
            "name": "point",
            "type": "Juicy.Point",
            "description": "Location of event"
         },
         "dt": {
            "name": "dt",
            "type": "number",
            "description": "Time (in seconds) since last frame"
         },
         "render": {
            "description": "Render this object.",
            "parameters": [ 
               {
                  "name": "context",
                  "type": "CanvasRenderingContext2D",
                  "description": "Rendering context to render on"
               } 
            ],
            "extendable": true
         }
      },
      "classes": [
         {
            "name": "Game",
            "static": {
               "init": {
                  "description": "Initialize the Juicy Game",
                  "parameters": [
                     {
                        "name": "canvas",
                        "type": "DOM Element",
                        "description": "Canvas element the game will be played in"
                     },
                     {
                        "name": "width",
                        "type": "number",
                        "description": "Width of the game itself"
                     },
                     {
                        "name": "height",
                        "type": "number",
                        "description": "Height of the game itself"
                     },
                     {
                        "name": "input_keys",
                        "type": "object",
                        "description": "Object mapping key name to key code"
                     }
                  ],
                  "return": "chain"
               }
            }, // Static Functions
            "member": {
               "setCanvas": {
                  "description": "Set the Canvas element the game renders to.",
                  "parameters": [
                     {
                        "name": "canvas",
                        "type": "DOM Element",
                        "description": "Canvas element the game will be played in"
                     }
                  ],
                  "return": "chain"
               },
               "resize": {
                  "description": "Resize the canvas to maintain proper aspect ratio",
                  "return": "chain"
               },
               "setState": {
                  "description": "Set the current running state for this game",
                  "parameters": [
                     {
                        "name": "state",
                        "type": "Juicy.State",
                        "description": "State to run"
                     }
                  ],
                  "return": "chain"
               },
               "run": {
                  "description": "Begin the game update loop",
                  "return": "chain"
               },
               "pause": {
                  "description": "Pause the game (kill its update loop)",
                  "return": "chain"
               },
               "keyDown": {
                  "description": "Determine whether a specific key is down",
                  "parameters": [
                     {
                        "name": "key",
                        "type": ["string", "number"],
                        "description": "Key name or key code"
                     }
                  ],
                  "return": "boolean"
               },
               "on": {
                  "description": "Attach a callback to specific events",
                  "parameters": [
                     {
                        "name": "action",
                        "type": "string",
                        "description": "Type of event commonly 'key'"
                     },
                     {
                        "name": "keys",
                        "type": ["string", "array of strings"],
                        "description": "Key names to attach to this callback",
                        "optional": true
                     },
                     {
                        "name": "callback",
                        "type": "function (string => ?) or (Event => ?)",
                        "description": "Function to call on event"
                     }
                  ],
                  "return": "chain"
               }
            } // Member Functions
         }, // Game
         {
            "name": "Point",
            "constructor": {
               "parameters": [
                  {
                     "name": "x",
                     "type": "number",
                     "description": "x value to initialize point at",
                     "default": 0
                  },
                  {
                     "name": "y",
                     "type": "number",
                     "description": "y value to initialize point at",
                     "default": "x"
                  }
               ]
            }, // Constructor
            "fields": {
               "x": "number",
               "y": "number"
            }, // Fields
            "member": {
               "add": {
                  "description": "Returns a new point with the sum of this and other",
                  "parameters": [
                     {
                        "name": "other",
                        "type": "Juicy.Point",
                        "description": "Point to sum with"
                     }
                  ],
                  "return": "Juicy.Point"
               },
               "sub": {
                  "description": "Returns a new point with the difference of this and other",
                  "parameters": [
                     {
                        "name": "other",
                        "type": "Juicy.Point",
                        "description": "Point to subtract this from"
                     }
                  ],
                  "return": "Juicy.Point"
               },
               "mult": {
                  "description": "Returns a new point with the product of this and other (like add or sub)",
                  "parameters": [
                     {
                        "name": "other",
                        "type": "Juicy.Point",
                        "description": "Point to multiply"
                     }
                  ],
                  "return": "Juicy.Point"
               },
               "length": {
                  "description": "Returns the length of this point as a vector",
                  "return": "number"
               }
            } // Member Functions
         }, // Point
         {
            "name": "State",
            "constructor": {
               "parameters": []
            },
            "static": {
               "extend": "common.extend",
            }, // Static Functions
            "member": {
               "init": {
                  "description": "Called whenever the game changes to this state e.g. Juicy.Game.setState(this)",
                  "parameters": [
                     {
                        "name": "game",
                        "type": "Juicy.Game",
                        "description": "Reference to the running Game"
                     }
                  ],
                  "extendable": true
               },
               "click": {
                  "description": "Register a click in the game",
                  "parameters": [ "common.point_event" ],
                  "extendable": true
               },
               "dragstart": {
                  "description": "Register the beginning of a user drag event (mouse down)",
                  "parameters": [ "common.point_event" ],
                  "extendable": true
               },
               "drag": {
                  "description": "Register a drag event in the game",
                  "parameters": [ "common.point_event" ],
                  "extendable": true
               },
               "dragend": {
                  "description": "Register when the user is done dragging (mouse up)",
                  "parameters": [ "common.point_event" ],
                  "extendable": true
               },
               "key_{CONTROL}": {
                  "description": "Register a key event for the CONTROL action e.g. key_UP",
                  "parameters": [
                     {
                        "name": "keyCode",
                        "type": "number",
                        "description": "Code of the actual key pressed"
                     }
                  ],
                  "extendable": true
               },
               "update": {
                  "description": "Update the state. Called by Juicy.Game once per frame",
                  "parameters": [
                     "common.dt",
                     {
                        "name": "game",
                        "type": "Juicy.Game",
                        "description": "Reference to current game (for input)"
                     }
                  ],
                  "extendable": true
               },
               "render": "common.render"
            } // Member functions
         }, // State
         {
            "name": "Entity",
            "constructor": {
               "parameters": [
                  {
                     "name": "state",
                     "type": "Juicy.State",
                     "description": "State to which this entity belongs"
                  },
                  {
                     "name": "components",
                     "type": "array of strings or Juicy.Components",
                     "description": "Components to initialize for this Entity"
                  }
               ]
            }, // Constructor
            "fields": {
               "position": "Juicy.Point",
               "scale": "Juicy.Point",
               "width": "number",
               "height": "number"
            }, // Fields
            "static": {
               "extend": "common.extend",
            }, // Static Functions
            "member": {
               "init": {
                  "description": "Called once the Entity's components have been initialized, so that you can mess with them at will.",
                  "extendable": true
               },
               "update": {
                  "description": "Update the Entity. Updates all components as needed.",
                  "parameters": [ "common.dt" ],
               },
               "render": {
                  "description": "Render this object.",
                  "parameters": [ 
                     {
                        "name": "context",
                        "type": "CanvasRenderingContext2D",
                        "description": "Rendering context to render on"
                     } 
                  ],
               },
               "getComponent": {
                  "description": "Return a component, if it exists",
                  "parameters": [
                     {
                        "name": "name",
                        "type": "string",
                        "description": "Name of the component"
                     }
                  ],
                  "return": ["Juicy.Component", "null"]
               },
               "addComponent": {
                  "description": "Add a component to an Entity",
                  "parameters": [
                     {
                        "name": "component",
                        "type": ["string", "Juicy.Component", "Constructor"],
                        "description": "Component to add"
                     }
                  ]
               },
               "addChild": {
                  "description": "Add a child, to be rendered when its parent is",
                  "parameters": [
                     {
                        "name": "child",
                        "type": "Juicy.Entity",
                        "description": "Entity that will be the child"
                     }
                  ]
               },
               "globalPosition": {
                  "description": "Get the position of this in world space",
                  "return": "Juicy.Point"
               },
               "globalScale": {
                  "description": "Get the scale of this in world space",
                  "return": "Juicy.Point"
               }
            } // Member functions
         }, // Entity
         {
            "name": "Component",
            "constructor": {
               "parameters": [
                  {
                     "name": "entity",
                     "type": "Juicy.Entity",
                     "description": "Entity this component belongs to (later this.entity)"
                  }
               ]
            }, // Constructor
            "static": {
               "extend": "common.extend",
               "create": {
                  "description": "Call Juicy.Component.extend and register it in the Juicy.Components namespace",
                  "parameters": [
                     {
                        "name": "name",
                        "type": "string",
                        "description": "Name to register this component as"
                     },
                     {
                        "name": "properties",
                        "type": "object",
                        "description": "Member functions of the new class"
                     },
                     {
                        "name": "static_properties",
                        "type": "object",
                        "description": "Static functions of the new class"
                     }
                  ]
               }
            }, // Static
            "member": {
               "update": {
                  "description": "Update this component",
                  "parameters": [
                     "common.dt",
                     {
                        "name": "game",
                        "type": "Juicy.Game",
                        "description": "Reference to current game (for input)"
                     }
                  ],
                  extendable: true
               },
               "render": "common.render"
            } // Member
         }
      ] // classes
   }
}