Juicy.Component.create('Particle', {
    constructor: function(entity) {
        this.speed    = new Vector();
        this.last     = new Vector();

        this.mass = 2;

        entity.position.x = Juicy.rand(800);
        entity.position.y = Juicy.rand(600);

        var INITIAL_SPEED = 100;
        this.speed.x = (Math.random() - 0.5) * INITIAL_SPEED;
        this.speed.y = (Math.random() - 0.5) * INITIAL_SPEED;
    },
    gravitate: function(dt, dx, dy, other_mass) {
        var G = 0.02;
        var force = G * other_mass / this.mass;

        this.speed = this.speed.add((new Vector(dx, dy)).normalize(force));
    },
    update: function(dt) {
        // Accelerate from black holes
        var points = this.entity.state.gravityPoints;
        for (var i = 0; i < points.length; i ++) {
            if(this.entity === points[i]) {
                continue;
            }

            this.gravitate(dt, 
                points[i].position.x - this.entity.position.x, 
                points[i].position.y - this.entity.position.y, 
                points[i].getComponent('GravityPoint').mass);
        }

        var MAX_SPEED = 300;
        if (this.speed.length() > MAX_SPEED) {
            this.speed = this.speed.normalize(MAX_SPEED);
        }

        this.last = this.entity.position;
        this.entity.position.x += this.speed.x * dt;
        this.entity.position.y += this.speed.y * dt;
    },
    render: function(context) {
        context.fillStyle = context.strokeStyle = '#ffffff';
        context.lineCap   = context.lineJoin    = 'round';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(0, 0);
        context.moveTo(this.last.x, this.last.y);
        context.stroke();
        context.moveTo(0, 0);
        context.arc(0, 0, 2, 0, Math.PI * 2, false);
        context.fill();
    }
});