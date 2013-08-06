var EditController = Ember.Controller.extend({
  html: Ember.computed('content', function(){
    var doc = this.get('content');
    var html;
    if (doc) { html = markdown.toHTML(doc); }
    return html;
  })
});

export default EditController;
