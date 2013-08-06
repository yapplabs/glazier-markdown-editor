import TextDoc from 'app/models/text_doc';

var IndexController = Ember.Controller.extend({
  cardDataStore: null,
  canEdit: Ember.computed.alias('cardDataStore.isAdmin'),
  docText: "",
  outputtedHTML: function(){
    var doc = this.get("docText");
    var html;
    if(doc) {
      html = markdown.toHTML(doc);
    }
    return html;
  }.property("docText")

});

export default IndexController;
