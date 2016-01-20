Template.listingSubmit.rendered = function () { 
    window.onload = function() { 

        input = document.getElementById('autocomplete'); 
        autocomplete = new google.maps.places.Autocomplete(input); 

        // When the user selects an address from the dropdown, 
        google.maps.event.addListener(autocomplete, 'place_changed', function() { 

             // Get the place details from the autocomplete object. 
            place = autocomplete.getPlace(); 
        }); 
    }; 
};

Template.addNewBar.events({
  'submit form': function(e, b){
    var lon = place.geometry.location.lng(place);
    var lat = place.geometry.location.lat(place);
    console.log("GEOMETRY:::::    " + JSON.stringify(place.geometry.location));
    console.log("GEOMETRY LNG:::::    " + JSON.stringify(place.geometry.location.lng(place)));
    console.log("GEOMETRY LAT:::::    " + JSON.stringify(place.geometry.location.lat(place)));
    if (!lon || !lat)
    {
        return;
    }

    var newBar = {
      title: $('#barName').val(),
      offer: $('#itemPrice').val(),
      ageLimit: $('#ageLimit').val(),
      email: $('#email').val(),
      mobile: $('mobile').val(),
      // address: JSON.stringify(place),
      loc : { type: "Point", coordinates: [ lon, lat ] }
    };

    Bars.insert(newBar);
 
    $('#addNewBarForm').find('input:text').val('');
    // $('#itemStore').focus();
    return false;
  }
});