var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('level', { path: '/:level' });
});

export default Router;
