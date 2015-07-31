Juicy.Components.Particle.create('GravityPoint', {
    constructor: function(entity) {
        this.__super__.constructor.apply(this, arguments);
        this.radius = 10;
        this.currentRadius = this.radius * 0.5;
        this._easeRadius = 0;
        this.mass = 100;
        this.speed = new Vector();
    },
    collapse: function(e) {
        this.currentRadius *= 1.75;
        this._collapsing = true;
    },
    update: function(dt) {
        if (this.destroyed) return;

        this.__super__.update.apply(this, arguments);

        if (!this.destroyed) {
            // Collide
            var area  = this.radius * this.radius * Math.PI;
            var points = this.entity.state.gravityPoints;
            for (var i = 0; i < points.length; i ++) {
                if(this.entity === points[i] || points[i].dead) {
                    continue;
                }

                var other = points[i].getComponent('GravityPoint');
                if ((this.currentRadius >= other.radius || this.dragging) &&
                    this.entity.transform.distance(points[i].transform) < (this.currentRadius + other.radius) * 0.85) {
                    points[i].dead = true;
                    this.mass += other.mass;

                    var thispos = new Vector(this.entity.transform.position.x,
                                             this.entity.transform.position.y);
                    var otherpos = new Vector(points[i].transform.position.x,
                                              points[i].transform.position.y);

                    this.speed = this.speed.add(thispos.sub(otherpos).scale(other.radius / this.radius * 0.5));

                    var other_area = other.radius * other.radius * Math.PI;
                    this.currentRadius = Math.sqrt((area + other_area * 3) / Math.PI);
                    this.radius = Math.sqrt((area + other_area) / Math.PI);
                }
            }
        }

        if (this._collapsing) {
            this.radius *= 0.75;

            if (this.radius < 1) {
                this.entity.dead = true;
            }
        }
        else if (this.currentRadius > 80) {
            this.collapse();
        }

        this._easeRadius = (this._easeRadius + (this.radius - this.currentRadius) * 0.07) * 0.95;
        this.currentRadius += this._easeRadius;
        if (this.currentRadius < 0) this.currentRadius = 0;

        this.speed = this.speed.scale(0.99);
    },
    render: function(context) {
        var grd, r;

        context.save();

        grd = context.createRadialGradient(0, 0, this.radius, 0, 0, this.radius * 5);
        grd.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.beginPath();
        context.arc(0, 0, this.radius * 5, 0, Math.PI * 2, false);
        context.fillStyle = grd;
        context.fill();

        r = Math.random() * this.currentRadius * 0.7 + this.currentRadius * 0.3;
        grd = context.createRadialGradient(0, 0, r, 0, 0, this.currentRadius);
        grd.addColorStop(0, 'rgba(0, 0, 0, 1)');
        grd.addColorStop(1, Math.random() < 0.2 ? 'rgba(255, 196, 0, 0.15)' : 'rgba(103, 181, 191, 0.75)');
        context.beginPath();
        context.arc(0, 0, this.currentRadius, 0, Math.PI * 2, false);
        context.fillStyle = grd;
        context.fill();
        context.restore();
    }
});