function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype.add = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.sub = function(other) {
    return new Vector(this.x - other.x, this.y - other.y);
};

Vector.prototype.scale = function(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
};

Vector.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.normalize = function(len) {
    len = len || 1;
    return this.scale(len / this.length());
};