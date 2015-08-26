(function(Juicy, Entity) {
   /* -------------------- Helper functions ----------------- */
   /*
    * Juicy.rand([min, ] max) - Return a random int between [min, max)
    */
   Juicy.rand = function(min, max) {
      if (max)
         return Math.floor(Math.random() * (max - min)) + min;
      else
         return Math.floor(Math.random() * min);
   };

   Juicy.PI = Math.PI;

   /* ----------------- Point helper function ---------------- */
   Juicy.Point.prototype.normalize = function(len) {
      len = len || 1;
      return this.mult(len / this.length());
   };

   /* ----------------- Entity helper functions -------------- */
   Entity.prototype.contains = function(point) {
      point = point.sub(this.position);
      return point.x >= 0          && point.y >= 0 && 
             point.x <= this.width && point.y <= this.height;
   };

   Entity.prototype.distance = function(other) {
      if (!other.x)
         other = other.position; // Make sure it's a Point

      return this.position.sub(other).length();
   };

   Entity.prototype.testCollision = function(other) {
      var otherBottomRight = other.position.add(new Point(other.width, other.height));
      var bottomRight      = this .position.add(new Point(this .width, this .height));

      return otherBottomRight.x >= this.position.x &&
             otherBottomRight.y >= this.position.y &&
             other.position.x   <= bottomRight.x   &&
             other.position.y   <= bottomRight.y;
   };
})(window.Juicy, Juicy.Entity);