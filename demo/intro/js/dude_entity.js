// AND the last piece is Entities! You can easily 
// just assign a type of entity to a variable,
// to avoid keeping track of what components to add.
var Dude = Juicy.Entity.extend({
   components: ['Box'],

   // This is called after all the components have been initialized.
   init: function() {

      // I CAN DO WHATEVER I WANT
      // I'M TIRED OF WRITING DOCS
      // ENJOY
      this.transform.width = 60;
      this.transform.height = 120;

      this.getComponent('Box').fillStyle = 'red';
   }
});