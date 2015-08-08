Juicy.Game.init(document.getElementById('example-canvas'), 660, 120, {});

var MyState = Juicy.State.extend({
  constructor: function() {
    this.entity = new Juicy.Entity(this, ['Image']);
    this.entity.position.y = 40;
    this.entity.getComponent('Image').setImage('./doge.jpeg');

    this.total_time = 0;
  },
  update: function(dt) {
    this.total_time += dt;

    this.entity.position.x = this.game.width * (Math.sin(this.total_time) + 1) / 2;
  },
  render: function(context) {
    this.entity.render(context);
  }
});

Juicy.Game.setState(new MyState()).run();