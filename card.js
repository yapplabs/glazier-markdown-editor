import Conductor from 'conductor';
import TestConsumer from 'app/consumers/test';

Conductor.require('/vendor/jquery.js');
Conductor.require('/vendor/handlebars.js');
Conductor.require('/vendor/ember-latest.js');
Conductor.require('/vendor/ember_card_bridge.js');

Conductor.requireCSS('/css/glazier_card.css');
Conductor.requireCSS('card.css');

import remoteEmberObjectConsumer from 'app/consumers/remote_ember_object';
remoteEmberObjectConsumer.controllers = [ 'cardMetadata' ];

var card = Conductor.card({
  App: null,
  consumers: {
    'paneTypeUserStorage': Conductor.Oasis.Consumer,
    'test': TestConsumer,
    'repository': Conductor.Oasis.Consumer,
    'remoteEmberObject': Conductor.Oasis.Consumer.extend(remoteEmberObjectConsumer)
  },

  defaultContentDiv: "<div id=\"card\"></div>",

  render: function (intent, dimensions) {
    if (!document.getElementById('card')) {
      document.body.innerHTML = this.defaultContentDiv;
    }

    return this.App.render(intent, dimensions);
  },

  activate: function() {
    Conductor.Oasis.configure('eventCallback', Ember.run);
    var Application = requireModule('app/application');
    window.App = this.App = Application.create();

    App.Router.map(function() {
      //this.route('unconnected');
      this.route('edit');
    });

    App.deferReadiness();
    App.register('card:main', this, { instantiate: false });
  },

  metadata: {
    document: function() {
      return {
        title: "Markdown Editor"
      };
    }
  }
});

export default card;

