// Components are pretty sweet. They define most of
// the actual Entity behavior. Usually you want to keep this
// encapsulated, but you can reference other things as well.

// By calling create(), instead of extend, we register this component
// to the name 'Custom'. That way, you can create an entity with
// 'Custom' as the component name, instead of including the whole object
// and we'll find it for you.
Juicy.Component.create('Custom', {

   // Again, constructor function called automatically
   constructor: function(entity) {
      this.val = 10;

      // Juicy Text. nothing new
      this.counter = new Juicy.Text('10', '20pt Arial');
   },

   // Member function! This is totally custom and can be called
   // but won't be unless you want to.
   increment: function() {
      this.val += 10;

      // Update text...
      this.counter.set({ text: this.val });
   

      // See, we can reference the entity this is attached to.
      this.entity.transform.position.x ++;
      this.entity.getComponent('OtherComponent'); // Doesn't find anything, but tries
   },

   // Called automatically when you call Entity.render();
   render: function(context) {
      this.counter.draw(context, 0, 0);
   }
})