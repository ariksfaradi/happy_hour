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
  'submit form': function (e) {
    var lon = place.geometry.location.lng(place);
    var lat = place.geometry.location.lat(place);
    if (!lon || !lat)
    {
        return;
    }

    var newBar = {
      title: $(e.target).find('[name=title]').val(),
      offer: $(e.target).find('[name=offer]').val(),
      ageLimit: $(e.target).find('[name=ageLimit]').val(),
      url: $(e.target).find('[name=url]').val(),
      email: $(e.target).find('[name=email]').val(),
      mobile: $(e.target).find('[name=mobile]').val(),
      address: place.formatted_address,
      loc : { type: "Point", coordinates: [ lon, lat ] }
    };
    console.log(newBar);
    Bars.insert(newBar);
 
    $('#addNewBarForm').find('input:text').val('');
    // $('#itemStore').focus();
    return false;
  }
});