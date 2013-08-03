var EditRoute = Ember.Route.extend({
  activate: function(){
    this.controllerFor('cardMetadata').set('isEditing', true);
  },
  deactivate: function(){
    this.controllerFor('cardMetadata').set('isEditing', false);
  },
  setupController: function(controller, model) {
    controller.set('docText', this.controllerFor('index').get('docText'));
  },
  events: {
    renderDefault: function(){
      this.transitionTo('index');
    },
    save: function() {
      var text = this.controllerFor('index').get('docText');
      TextDoc.save(text);
      this.transitionTo('index');
    }
  }
});

export default EditRoute;
