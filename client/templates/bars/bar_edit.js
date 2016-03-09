Template.barEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentBarId = this._id;

		var barProperties = {
			img1: $(e.target).find('[name=img1]').val(),
			img2: $(e.target).find('[name=img2]').val(),
			title: $(e.target).find('[name=title]').val(),
			offer: $(e.target).find('[name=offer]').val(),
			startHappyHour: convertToFloat($(e.target).find('[name=startTime]').val()),
			endHappyHour: convertToFloat($(e.target).find('[name=endTime]').val()),
			ageLimit: $(e.target).find('[name=ageLimit]').val(),
			url: $(e.target).find('[name=url]').val(),
			email: $(e.target).find('[name=email]').val(),
			mobile: $(e.target).find('[name=mobile]').val(),
			veganFriendly: $(e.target).find('[name=veganFriendly]:checked').val(),
			lightKitchen: $(e.target).find('[name=lightKitchen]:checked').val(),
			liveShows: $(e.target).find('[name=liveShows]:checked').val(),
			espressoFriends: $(e.target).find('[name=espressoFriends]:checked').val(),
  			smokingArea: $(e.target).find('[name=smokingArea]:checked').val()			
		}

		Bars.update(currentBarId, {$set: barProperties}, function(error) {
			if (error) {
				alert(error.reason);
				alert(this.title);
			} 
		});
	},

	'click .delete': function(e) {
	    e.preventDefault();

	    conole.log("barId", this._id);
	    if (confirm("Delete this bar?")) {
	      var currentBarId = this._id;
	      Bars.remove(currentBarId);
	      Router.go('barsList');
	    }
  	}
});