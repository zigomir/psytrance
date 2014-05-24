export default Ember.Route.extend({
  model: function(params) {
    return {
      level: params.level,
      levelClass: 'level-' + params.level
    };
  },

  activate: function() {
    var self = this;
    var level = 1;

    window.setInterval(function() {
      self.transitionTo('level', level);
      level += 1;
    }, 3000); // TODO: balance this interval somehow
  }
});
