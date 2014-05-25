export default Ember.ObjectController.extend({

  levelChanged: function() {
    var level   = parseInt(this.get('level'), 10);
    var $canvas = Ember.$('canvas');

    if ($canvas.length > 0 && level > 1) {
      $canvas.addClass('loading');
      $canvas.width(); // force recalculate style
      $canvas.removeClass('loading');

      $canvas.css('-webkit-animation-duration', (1000 / level) + 'ms');

      // level 5+ is getting crazy as hell
      $canvas.css('-webkit-animation-timing-function',
        'cubic-bezier(0.1, 0.7, 1.0, ' + level + ')');
    }
  }.observes('levelClass'),

  actions: {
    levelUp: function() {
      var newLevel = parseInt(this.get('level'), 10) + 1;
      this.transitionToRoute('level', newLevel);
    }
  }

});
