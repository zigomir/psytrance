export default Ember.Route.extend({
  model: function(params) {
    return {
      level: params.level,
      levelClass: 'level-' + params.level
    };
  },

  // TODO: move to new level based on score, balance this interval somehow
  activate: function() {
    var self = this;
    var level = 1;
    window.setInterval(function() {
      self.transitionTo('level', level);
      level += 1;
    }, 10000);
  }
});
