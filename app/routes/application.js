import card from 'card';
import Conductor from 'conductor';


var ApplicationRoute = Ember.Route.extend({

  model: function(){
  },
  setupController: function(controller, model) {
    controller.set('repositoryName', card.data.repositoryName);
    var textDocController = this.controllerFor("textDoc");
    textDocController.set('docText', card.data.paneTypeUserEntries.doc);
  }
});

export default ApplicationRoute;
