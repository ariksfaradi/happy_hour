Template.barItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});


Template.barItem.events({
  'click .delete-item': function(){
    Bars.remove(this._id);
  }
});