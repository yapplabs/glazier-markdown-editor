import RemoteEmberObjectMixin from 'glazier/remote-ember-object-mixin';

var CardMetadataController = Ember.Controller.extend(RemoteEmberObjectMixin, {
  needs: ['application'],
  cardDataStore: null, //injected
  application: Ember.computed.alias('controllers.application'),
  publishedProperties: [
    'isEditable',
    'isEditing',
    'title'
  ],
  title: Ember.computed.alias('controllers.application.title'),
  isEditing: Ember.computed.alias('controllers.application.isEditing'),
  isEditable: Ember.computed.and('cardDataStore.isAdmin', 'application.connected')
});

export default CardMetadataController;
