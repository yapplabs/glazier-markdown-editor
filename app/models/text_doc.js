import card from 'card';

var TextDoc = {
  save: function(docText) {
    var service = card.consumers.adminStorage;
    return service.request("setItem", "doc", docText);
  }
};

export default TextDoc;
