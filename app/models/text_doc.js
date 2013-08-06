import card from 'card';

var TextDoc = {
  save: function(docText) {
    var service = card.consumers.paneTypeUserStorage;
    return service.request("setItem", "doc", docText);
  }
};

export default TextDoc;
