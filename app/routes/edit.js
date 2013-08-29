import TextDoc from 'app/models/text_doc';

var EditRoute = Ember.Route.extend({
  activate: function(){
    this.controllerFor('cardMetadata').set('isEditing', true);
  },
  deactivate: function(){
    this.controllerFor('cardMetadata').set('isEditing', false);
  },
  setupController: function(controller, model) {
    controller.set('content', this.controllerFor('index').get('content'));
  },
  actions: {
    renderDefault: function(){
      this.send('save');
    },
    save: function() {
      var text = this.controllerFor('edit').get('content');
      var route = this;
      TextDoc.save(text).then(function(){
        return route.transitionTo('index');
      }).then(null, Conductor.error);
    }
  }
});

export default EditRoute;
