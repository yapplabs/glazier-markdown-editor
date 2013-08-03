import card from 'card';

var IndexRoute = Ember.Route.extend({
  activate: function() {
    this.controllerFor('application').set('connected', true);
  },
  setupController: function(controller, model) {
    controller.set('docText', card.data.paneTypeUserEntries.doc);
  }
});

export default IndexRoute;
