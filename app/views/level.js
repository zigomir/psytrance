import trancy from 'psytrance/utils/trancy';
import Stopwatch from 'psytrance/utils/stopwatch';

export default Ember.View.extend({

  update: function(stopwatch, score) {
    score.innerHTML = stopwatch.time();
  },

  renderTrancyCanvas: function() {
    trancy();

    // start the stopwatch
    var self = this;
    var stopwatch = new Stopwatch();
    var score = document.getElementsByClassName('score');
    window.setInterval(function() {
      self.update(stopwatch, score[0]);
    }, 1);
    stopwatch.start();

  }.on('didInsertElement')

});
