var location = Tracker.autorun(function () {
	navigator.geolocation.getCurrentPosition(function(position) {
        Session.set('lat', position.coords.latitude);
        Session.set('lon', position.coords.longitude);
    });

});
    
Template.location.helpers({
  lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); }
});
