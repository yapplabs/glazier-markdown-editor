var MarkdownMixin = Ember.Mixin.create({
  html: function(){
    var doc = this.get('content');
    var html;
    if (doc) { html = markdown.toHTML(doc); }
    return html;
  }.property('content')
});

export default MarkdownMixin;
