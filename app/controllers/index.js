import TextDoc from 'app/models/text_doc';

var IndexController = Ember.Controller.extend({
  cardDataStore: null,
  canEdit: Ember.computed.alias('cardDataStore.isAdmin'),
  docText: "",
  outputtedHTML: function(){
    var html = markdown.toHTML(this.get("docText"));
    return html;
  }.property("docText")

});

export default IndexController;