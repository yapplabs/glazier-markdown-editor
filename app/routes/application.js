import card from 'card';
import Conductor from 'conductor';

var ApplicationRoute = Ember.Route.extend({
  actions: {
    renderEdit: function(){
      this.transitionTo('edit').then(null, Conductor.error);
    },
    edit: function() {
      this.transitionTo('edit').then(null, Conductor.error);
    }
  },
  setupController: function(controller, model) {
    controller.set('repositoryName', card.data.repositoryName);
  }
});

export default ApplicationRoute;
