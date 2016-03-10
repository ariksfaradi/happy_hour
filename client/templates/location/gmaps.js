gmaps = {
	// map object
	map: null,

	// google markers object
	markers: [],

	// google lat lng objects
	latLngs: [],

	// our formatted marker data objects
	markerData: [],

	// add a marker given our formatted marker data object
	addMarke: function(marker) {
		var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);
		var gMarker = new google.maps.marker({
			postition: gLatLng,
			map: this.map,
			title: marker.title,
			// animation: google.maps.Animation.DROP,
			icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
		});
		this.latLngs.push(gLatLng);
		this.markers.push(gMarker);
		this.markerData.push(marker);
		return gMarker;
	},

	// calculate and move the bound box based on our markers
	calcBounds: function() {
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0, latLngLength = this.latLngs.length; i < latLngLength; ++i) {
			bounds.extend(this.latLngs[i]);
		}
		this.map.fitBounds(bounds);
	},

	// check if marker already exist
	markerExist: function(key, val) {
		_.each(this.markers, function(storedMarker) {
			if (storedMarker[key] == val)
				return true;
		});
		return false;
	},

	// initialize the map
	initialize: function() {
		console.log("[+] initializing google Maps...");
		var mapOptions = {
			zoom: 3,
			center: new google.maps.LatLng(Session.get('lat'),Session.get('lng')),
			mapTypeId: google.maps.mapTypeId.HYBRID
		};

		this.map = new google.maps.Map(
			document.getElementById('mapCnavas'),
			mapOptions
		);

		// global flag saying we intialized already
		Session.set('map', true);
	}
}



function initMap(bar) {
	var mapDiv =  document.getElementById('mapCanvas');
    var currentPostion = {lng: Session.get('lon'), lat: Session.get('lat')};	
	var mapOptions = {
		zoom: 15,
		// center: new google.maps.LatLng(Session.get('lat'),Session.get('lng')),
		 center: {lat: currentPostion.lat, lng: currentPostion.lng}
		// mapTypeId: google.maps.mapTypeId.HYBRID
	};
	var map = new google.maps.Map(mapDiv, mapOptions);
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	var currMarker = new google.maps.Marker({
		position: new google.maps.LatLng(currentPostion.lat, currentPostion.lng),
		map: map,
		icon: iconBase + 'schools_maps.png'
	});

	var barPosition = {lat: bar.loc.coordinates[1], lng: bar.loc.coordinates[0]}
	var barPosition = new google.maps.LatLng(barPosition.lat, barPosition.lng);
	// console.log("barPosition", barPosition); 
	var currMarker = new google.maps.Marker({
		position: barPosition,
		map: map,
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	});
}



Template.googleMaps.rendered = function() {
	var bar = this.data;
	initMap(bar);
}