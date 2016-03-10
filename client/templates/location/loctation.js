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


function location() {
	navigator.geolocation.getCurrentPosition(function(position) {
		if ("geolocation" in navigator)
		{
			Logger.log("geolocation is avialiable");
			Session.set('lon', position.coords.longitude);	
			Session.set('lat', position.coords.latitude);
        	
		} else {
			Logger.log("geolocation is not avialiable");
		}
        
    }, error);
}

Tracker.autorun(function () {
	location();
    Session.set('lowerBoundHour', moment(this.date).format("HH:mm"));
	var upperBoundHour = AddHours(Session.get('lowerBoundHour'),4);

	var radius = Accounts.user() ? Accounts.user().profile.discoverySettings.radius : 20000;
	Meteor.subscribe("bars", {lon: Session.get('lon'), lat: Session.get('lat')}, radius, 
							{lowerBoundHour:Session.get('lowerBoundHour'),upperBoundHour:upperBoundHour} );
});
    

Template.location.helpers({
  lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); },
});
