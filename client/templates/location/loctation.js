function error(err) {
  console.log('ERROR(' + err.code + '): ' + err.message);
};

function AddHours(currentHour, hoursToAdd) {
	var hours = parseInt(currentHour[0] + currentHour[1]);
	// hours = (hours + hoursToAdd) % 24;
	hours = (hours + hoursToAdd);
	var newHour = hours.toString() + currentHour.substr(2,4);
	return newHour;	
}

var location = Tracker.autorun(function () {
	navigator.geolocation.getCurrentPosition(function(position) {
		if ("geolocation" in navigator)
		{
			Logger.log("geolocation is avialiable");
			Session.set('lat', position.coords.latitude);
        	Session.set('lon', position.coords.longitude);	
		} else {
			Logger.log("geolocation is not avialiable");
		}
        
    }, error);

    Session.set('lowerBoundHour', moment(this.date).format("HH:mm"));
	var upperBoundHour = AddHours(Session.get('lowerBoundHour'),4);
    console.log("lower: ", Session.get('lowerBoundHour') );
    console.log("upper: ", upperBoundHour );

	var radius = Accounts.user() ? Accounts.user().profile.discoverySettings.radius : 20000;
	return Meteor.subscribe("bars", {lon: Session.get('lon'), lat: Session.get('lat')}, radius, 
							{lowerBoundHour:Session.get('lowerBoundHour'),upperBoundHour:upperBoundHour} );
});
    

Template.location.helpers({
  lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); },
});
