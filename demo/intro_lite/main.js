// function(Juicy) {
   Juicy.Game.init(document.getElementById('game-canvas'), 1024, 768, {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SPACE: 32,

      W: 87,
      A: 65,
      S: 83,
      D: 68,
   });

   document.addEventListener('DOMContentLoaded', function() {
      Juicy.Game.setState(new GameScreen())
      Juicy.Game.run();
   }, false);
// });