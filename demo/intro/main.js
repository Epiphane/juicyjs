// function(Juicy) {
   var Game = new Juicy.Game(document.getElementById('game-canvas'), 1024, 768);
   Game.setInput(new Juicy.Input(document, {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SPACE: 32,

      W: 87,
      A: 65,
      S: 83,
      D: 68,
   }));

   // On window resize, fill it with the game again!
   window.onresize = function() {
       Game.resize();
   };

   document.addEventListener('DOMContentLoaded', function() {
      Game.setState(new GameScreen()).run();
   }, false);
// });