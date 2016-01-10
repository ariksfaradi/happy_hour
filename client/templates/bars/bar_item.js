Template.barItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});


Template.barItem.events({
  'click .deleteItem': function(){
    Bars.remove(this._id);
  }
});