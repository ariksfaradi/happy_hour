function error(err) {
  console.log('ERROR(' + err.code + '): ' + err.message);
};

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

    console.log("lat on client: ", Session.get('lat'));
    console.log("lon on client: ", Session.get('lon'));

	var radius = Accounts.user() ? Accounts.user().profile.discoverySettings.radius : 20000;
	return Meteor.subscribe("bars", {lon: Session.get('lon'), lat: Session.get('lat')}, radius );
});
    
Template.location.helpers({
  lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); }
});
