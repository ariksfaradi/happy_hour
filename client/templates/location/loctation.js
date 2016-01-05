Meteor.setInterval(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        Session.set('lat', position.coords.latitude);
        Session.set('lon', position.coords.longitude);
    });
}, 5000);

Template.location.helpers({
  lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); }
});

// var currLocation = Geolocation();
// Template.location.helpers({
//   lat: 0,
//   lng: 0
// });

// Template.location.helpers({
//   lat: Geolocation.latLng().lat,
//   lon: Geolocation.latLng().lng
// });

