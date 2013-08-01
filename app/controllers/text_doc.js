import TextDoc from 'app/models/text_doc';

var TextDocController = Ember.ObjectController.extend({
  docText: "",
  save: function(){
    TextDoc.save(this.get('docText'))
  }
});

export default TextDocController;