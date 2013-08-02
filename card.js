import Conductor from 'conductor';
import TestConsumer from 'app/consumers/test';

Conductor.require('/vendor/jquery.js');
Conductor.require('/vendor/handlebars.js');
Conductor.require('/vendor/ember-latest.js');
Conductor.require('/vendor/markdown.js');

/* Uncomment/add required css files */
Conductor.requireCSS('/css/glazier_card.css');
Conductor.requireCSS('card.css');

var card = Conductor.card({
  consumers: {
    'paneTypeUserStorage': Conductor.Oasis.Consumer,
    'test': TestConsumer,
    'repository': Conductor.Oasis.Consumer
  },

  defaultContentDiv: "<div id=\"card\"></div>",

  render: function (intent, dimensions) {
    document.body.innerHTML = this.defaultContentDiv;
    Ember.run(this.App, 'advanceReadiness');
  },

  activate: function() {
    this.App = requireModule('app/application');
  },

  metadata: {
    document: function(promise) {
      promise.resolve({
        title: "Give this card a proper title in card.js card.metadata"
      });
    }
  }
});

export default card;

