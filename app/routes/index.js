import card from 'card';

var IndexRoute = Ember.Route.extend({
  activate: function() {
    this.controllerFor('application').set('connected', true);
  },
  setupController: function(controller, model) {
    var editController = this.controllerFor('edit');
    // TODO: an actually doc model would cleanup many things.
    controller.set('content', editController.get('content') || card.data.paneEntries.doc);
  }
});

export default IndexRoute;
