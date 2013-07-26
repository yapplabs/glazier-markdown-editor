import TextDoc from 'app/models/text_doc';

var TextDocController = Ember.ObjectController.extend({
  name: "loveSong",                    //todo: default these to ""
  text: "this is not a love song",
  save: function(){
    console.log("I am saving doc " + this.name);
    TextDoc.save({name: this.get('name'), doc: {text: this.get('text')}})
  }
});

export default TextDocController;