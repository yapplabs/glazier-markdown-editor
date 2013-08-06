var IndexController = Ember.Controller.extend({
  cardDataStore: null,
  canEdit: Ember.computed.alias('cardDataStore.isAdmin'),
  html: Ember.computed('content', function(){
    var doc = this.get('content');
    var html;
    if (doc) { html = markdown.toHTML(doc); }
    return html;
  })
});

export default IndexController;
