import MarkdownMixin from 'app/mixins/markdown';

var IndexController = Ember.Controller.extend(MarkdownMixin, {
  cardDataStore: null,
  canEdit: Ember.computed.alias('cardDataStore.isAdmin')
});

export default IndexController;
