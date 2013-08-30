var ApplicationController = Ember.ArrayController.extend({
  repositoryName: null,
  isEditing: false,
  defaultTitle: function() {
    return "Markdown for " + this.get('repositoryName');
  }.property('repositoryName'),
  title: function() {
    var title = this.get('cardDataStore.paneEntries.title');
    var defaultTitle = this.get('defaultTitle');
    return title || defaultTitle;
  }.property('defaultTitle', 'cardDataStore.paneEntries.title')
});

export default ApplicationController;
