import TextDoc from 'app/models/text_doc';

var TextDocController = Ember.ObjectController.extend({
  docText: "",
  isEditing: false,
  outputtedHTML: function(){
    var doc = this.get('docText');
    var html = doc && markdown.toHTML(doc);
    return html;
  }.property("docText"),
  save: function(){
    TextDoc.save(this.get('docText'));
    this.set("isEditing", false);
  },
  edit: function(){
    console.log("eidt");
    this.set("isEditing", true);
  },
  cancel: function(){
    console.log("cancel");
    this.set("isEditing", false);
  }

});

export default TextDocController;