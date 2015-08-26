(function(Juicy, Entity) {
   /* ----------------------- Sounds ------------------------ */
   var Sound = Juicy.Sound;

   Sound.prototype.mix    = 1;
   Sound.prototype.setVolume = function(volume) {
      this.volume = volume;
      this.udpateMix();
   };

   Sound.prototype.udpateMix = function() {
      this.sound.volume = this.volume * this.mix;
   }

   /* --------- Group Sounds together in these */
   var SoundGroup = Juicy.SoundGroup = function(options) {
      options = options || {};
      this.sounds = {};
      this.volume = options.volume || Juicy.defaults.volume;
      if (options.loop != undefined) {
         this.loop = !!options.loop;
      }
   };

   // Basic sound
   SoundGroup.prototype.Sound = Sound;
   SoundGroup.prototype.load = function(name, source, options) {
      var sound = new (this.Sound)(source, options);
      if (options && options.mix != undefined) {
         sound.mix = options.mix;
         sound.udpateMix(); // Update sound's volume
      }

      this.sounds[name] = sound;
   };

   SoundGroup.prototype.forEach = function(callback) {
      for (var name in this.sounds) {
         callback.call(this, this.sounds[name]);
      }
   };

   SoundGroup.prototype.setVolume = function(volume) {
      this.forEach(function(sound) {
         sound.volume = sound.mix * this.volume;
      });
   };

   SoundGroup.prototype.do = function(name, fn) {
      var sound = this.sounds[name];
      if (sound) {
         sound[fn]();
         return sound;
      }
      else {
         throw 'Attempted to call ' + fn + ' on nonexistent sound ' + name;
      }
   };

   SoundGroup.prototype.play = function(name) {
      this.do(name, 'play');
   };

   SoundGroup.prototype.pause = function(name) {
      this.do(name, 'pause');
   };

   SoundGroup.prototype.pause = function(name) {
      var sound = this.do(name, 'pause');
      sound.currentTime = 0;
   };

   /* Extendable */
   SoundGroup.extend = Sound.extend = Juicy.extend;

   /* ------------------- Typical Sounds -------------------- */
   Juicy.Music = Sound.extend({ loop: true });
   Juicy.SFX   = Sound.extend({
      play: function() {
         this.stop();
         Sound.prototype.play.call(this);
      }
   });

   /* ------------------- Typical SoundGroups --------------- */
   Juicy.Musics       = SoundGroup.extend({ Sound: Juicy.Music });
   Juicy.SoundEffects = SoundGroup.extend({ Sound: Juicy.SFX   });
})(window.Juicy, Juicy.Entity);
