Template.barEdit.helpers({
	Title: function() {
		return this._id;
	}
})

Template.barEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentBarId = this._id;
		console.log("currentBarId: ", currentBarId);

		var startTime = $(e.target).find('[name=startTime]').val();
		if (!startTime)
			startTime = this.startHappyHour;
		else 
			startTime = convertToFloat(startTime);
		var endTime = $(e.target).find('[name=endTime]').val();
		if (!endTime) 
			endTime = this.endHappyHour
		else 
			endTime = convertToFloat(endTime);
		
		console.log("startTime: ", startTime);
		console.log("endTime: ", endTime);

	    var veganFriendly = $(e.target).find('[name=veganFriendly]:checked').val() ? "Vegan Friendly" : null;
	    var lightKitchen = $(e.target).find('[name=lightKitchen]:checked').val() ? "light kitchen" : null;
	    var liveShows = $(e.target).find('[name=liveShows]:checked').val() ? "live shows" : null; 
	    var espressoFriends = $(e.target).find('[name=espressoFriends]:checked').val() ? "espresso & friends" : null;
	    var smokingArea = $(e.target).find('[name=smokingArea]:checked').val() ? "Outdoor smoking area" : null;
	    var gayFriendly = $(e.target).find('[name=gayFriendly]:checked').val() ? "gay friendly" : null;
	    var dogAllowd = $(e.target).find('[name=dogAllowd]:checked').val() ? "dog allowd" : null;
	    var acInside = $(e.target).find('[name=acInside]:checked').val() ? "ac inside" : null;

		var barProperties = {
			img1: $(e.target).find('[name=img1]').val(),
			img2: $(e.target).find('[name=img2]').val(),
			title: $(e.target).find('[name=title]').val(),
			offer: $(e.target).find('[name=offer]').val(),
			startHappyHour: startTime,
			endHappyHour: endTime,
			ageLimit: $(e.target).find('[name=ageLimit]').val(),
			url: $(e.target).find('[name=url]').val(),
			email: $(e.target).find('[name=email]').val(),
			mobile: $(e.target).find('[name=mobile]').val(),
			veganFriendly: veganFriendly,
			lightKitchen: lightKitchen,
			liveShows: liveShows,
			espressoFriends: espressoFriends,
			smokingArea: smokingArea,
			gayFriendly: gayFriendly,
			dogAllowd: dogAllowd,
			acInside: acInside
		}

		console.log(barProperties);

		Bars.update(currentBarId, {$set: barProperties}, function(error) {
			if (error) {
				alert(error.reason);
			} else {
				Router.go('barsList');
			} 
		});
	},

	'click .delete': function(e) {
	    e.preventDefault();

	    console.log("barId", this._id);
	    if (confirm("Delete this bar?")) {
	      var currentBarId = this._id;
	      Bars.remove(currentBarId);
	      Router.go('barsList');
	    }
  	}
});