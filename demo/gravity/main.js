// function(Juicy) {
   var Game = Juicy.Game.init(document.getElementById('game-canvas'), 800, 600);

   // On window resize, fill it with the game again!
   window.onresize = function() {
       Game.resize();
   };

   document.addEventListener('DOMContentLoaded', function() {
      Game.setState(new GameState()).run();
   }, false);
// });