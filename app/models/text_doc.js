import card from 'card';


var TextDoc = {

  save: function(params) {
    var service = card.consumers.paneTypeUserStorage;
    return service.request("setItem", params.name, params.doc).then(null, Conductor.error);
  }
};

export default TextDoc;
