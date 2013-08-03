import card from 'card';
import Conductor from 'conductor';


var ApplicationRoute = Ember.Route.extend({
  events: {
    renderEdit: function(){
      this.transitionTo('edit');
    },
    edit: function() {
      this.transitionTo('edit');
    }
  },
  setupController: function(controller, model) {
    controller.set('repositoryName', card.data.repositoryName);
  }
});

export default ApplicationRoute;
