var GameState = Juicy.State.extend({
   constructor: function() {
      // Create credit tag
      this.credit = new Juicy.Entity(this, ['Text']);
      this.credit.position.y = 586;
      var text = this.credit.getComponent('Text');
      text.set({ 
         text: 'Credit to codepen.io/akm2/full/rHIsa',
         font: '12px Arial'
      });

      // Create particles
      this.particles = [];
      for (var i = 0; i < 100; i ++) {
         this.particles.push(new Juicy.Entity(this, ['Particle']));
      }

      this.gravityPoints = [];

      this.gradient = false;
      this.canv = document.createElement('canvas');
      this.canv.width = 800;
      this.canv.height = 600;
      this.ctx = this.canv.getContext('2d');
   },
   click: function(point) {
      if (this.credit.contains(point)) {
         window.open('http://codepen.io/akm2/full/rHIsa', '_blank');
      }
      else {
         var gPoint = new Juicy.Entity(this, ['GravityPoint']);
         gPoint.position = point;
         this.gravityPoints.push(gPoint);
      }
   },
   drag: function(point) {
      if (this.dragging) {
         this.dragging.point.position = point.sub(this.dragging.offset);
      }
   },
   dragstart: function(point) {
      for (var i = 0; i < this.gravityPoints.length; i ++) {
         var gravityPoint = this.gravityPoints[i].getComponent('GravityPoint');
         var dist = point.sub(this.gravityPoints[i].position);
         if (dist.length() < gravityPoint.radius) {
            this.dragging = {
               point: this.gravityPoints[i],
               start: point,
               offset: dist
            };
         }
      }
   },
   dragend: function(x, y) {
      this.dragging = false;
   },
   update: function(dt, input) {
      for (var i = 0; i < this.particles.length; i ++) {
         this.particles[i].update(dt);
      }

      for (var i = 0; i < this.gravityPoints.length; i ++) {
         if (this.gravityPoints[i].dead) {
            this.gravityPoints.splice(i, 1);
            i --;
         }
         else {
            this.gravityPoints[i].update(dt);
         }
      }
   },
   renderParticles: function(context) {
      for (var i = 0; i < this.particles.length; i ++) {
         this.particles[i].render(context);
      }
   },
   renderGravityPoints: function(context) {
      for (var i = 0; i < this.gravityPoints.length; i ++) {
         this.gravityPoints[i].render(context);
      }
   },
   drawCanv: function(context) {
      context.drawImage(this.canv, 0, 0);
   },
   stopClear: true,
   render: function(context) {
      if (!this.gradient) {
         this.gradient = context.createRadialGradient(400, 300, 0, 400, 300, Math.sqrt(400*400+300*300));
         this.gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
         this.gradient.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
      }

      context.fillStyle = 'rgba(11, 51, 56, 1)';
      context.fillRect(0, 0, 800, 600);

      context.fillStyle = this.gradient;
      context.fillRect(0, 0, 800, 600);

      this.credit.render(context);

      this.ctx.save();
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.globalAlpha = 0.35;
      this.ctx.fillRect(0, 0, 800, 600);
      this.ctx.restore();

      this.renderParticles(this.ctx);
      this.renderGravityPoints(context);

      this.drawCanv(context);
   }
});