import trancy from 'psytrance/utils/trancy';

export default Ember.View.extend({
  renderTrancyCanvas: function() {
    trancy();
  }.on('didInsertElement')
});
