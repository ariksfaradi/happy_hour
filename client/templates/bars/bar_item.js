Template.barItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  barId: function() {
    console.log("bar: ", this._id);
    return this._id;
  }

});


Template.barItem.events({
  'click .delete-item': function(){
    Bars.remove(this._id);
  },
  'click #moreAbout' : function() {
    console.log("click on: ", this._id);
  }
});

Template.barItem.rendered = function() {
	$('.carousel').carousel({
	  interval: false
	});
};


