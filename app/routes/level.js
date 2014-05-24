// import Stopwatch from 'psytrance/utils/stopwatch';

export default Ember.Route.extend({
  model: function(params) {
    return {
      level: params.level,
      levelClass: 'level-' + params.level
    };
  },
  //
  // setupController: function(controller, model) {
  //   controller.set('model', model);
  //
  //   // var stopwatch = new Stopwatch();
  //   // stopwatch.start();
  //   //
  //   // controller.set('stopwatch', stopwatch);
  // },

  // TODO: move to new level based on score
  activate: function() {
    // var self = this;
    // var level = 1;
    // window.setInterval(function() {
    //   self.transitionTo('level', level);
    //   level += 1;
    // }, 3000); // TODO: balance this interval somehow
  }
});
