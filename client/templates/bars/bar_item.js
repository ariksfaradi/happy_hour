navigator.geolocation.getCurrentPosition(function(position) {
  if ("geolocation" in navigator)
  {
    console.log("geolocation is avialiable");
    Session.set('lat', position.coords.latitude);
    Session.set('lon', position.coords.longitude);  
  } else {
    console.log("geolocation is not avialiable");
  }
      
}); 


var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(point1, point2) {
  var earthRadius = 6378137; //meters
  var dLong = rad(point1.lng - point2.lng);
  var dLat = rad(point1.lat - point2.lat);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos(rad(point1.lat)) * Math.cos(rad(point2.lat)) *
  Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = earthRadius * c;
  return distance.toFixed(0);
}


var hourRepresentation = function(hour) {
  var retVal = hour.toFixed(2);

  retVal = retVal.toString();
  if ('.' === retVal[1]) {
    return '0' + retVal[0] + ':' + retVal.substr(2,3) ;
  }
  return retVal.substr(0,2) + ':' + retVal.substr(3,4);
}

Template.barItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  barId: function() {
    console.log("bar: ", this._id);
    return this._id;
  },
  distance: function() {
    var currentPostion = {lng: Session.get('lon'), lat: Session.get('lat')};
    barPosition = {lng: this.loc.coordinates[0], lat: this.loc.coordinates[1]};
    var distance = getDistance(currentPostion,barPosition);
    var unit = "m";

    if (distance > 1000) {
      distance /= 1000;
      unit = "km";
    }   
    return distance + unit;
  },

  editPermit: function() {
    return  Meteor.user() && (this.userId === Meteor.userId() || 'admin' === Meteor.user().roles[0]); 
  },

  barLat: function() {
    return this.loc.coordinates[1];
  },

  barLng: function() {
    return this.loc.coordinates[0];  
  },

  currLat: function() {
    return Session.get('lat');
  },

  currLng: function() {
    return Session.get('lon');
  },

  hours: function() {
    var start = hourRepresentation(this.startHappyHour);
    var end = hourRepresentation(this.endHappyHour);

    return start + " - " + end;
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



