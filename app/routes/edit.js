import TextDoc from 'app/models/text_doc';

var EditRoute = Ember.Route.extend({
  activate: function(){
    this.controllerFor('cardMetadata').set('isEditing', true);
  },
  deactivate: function(){
    this.controllerFor('cardMetadata').set('isEditing', false);
  },
  setupController: function(controller, model) {
    controller.set('title', this.controllerFor('application').get('title'));
    controller.set('content', this.controllerFor('index').get('content'));
  },
  adminStorageConsumer: function() {
    return this.container.lookup('consumer:adminStorage');
  }.property(),
  saveTitle: function() {
    var title = this.controller.get('title');
    this.controllerFor('application').set('title', title);
    this.get('adminStorageConsumer').request('setItem', 'title', title);
  },
  saveMarkdownText: function() {
    var text = this.controllerFor('edit').get('content');
    return TextDoc.save(text);
  },
  actions: {
    renderDefault: function(){
      this.send('save');
    },
    save: function() {
      this.saveTitle();
      var route = this;
      this.saveMarkdownText().then(function(){
        return route.transitionTo('index');
      }).then(null, Conductor.error);
    }
  }
});

export default EditRoute;
