Template.listingSubmit.rendered = function () { 
    input = document.getElementById('autocomplete'); 
    autocomplete = new google.maps.places.Autocomplete(input); 

    // When the user selects an address from the dropdown, 
    google.maps.event.addListener(autocomplete, 'place_changed', function() { 

         // Get the place details from the autocomplete object. 
        place = autocomplete.getPlace(); 
    }); 
};

Template.addNewBar.events({
  'submit form': function (e) {
    var lon = place.geometry.location.lng(place);
    var lat = place.geometry.location.lat(place);
    if (!lon || !lat)
    {
        return;
    }
    var image1 = $(e.target).find('[name=img1]').val();
    if (!image1)
      image1 = "http://telavivparty.com/wp-content/uploads/2014/11/montage.jpg";
    var image2 = $(e.target).find('[name=img2]').val();
    if (!image2)
      image2 = "http://e-barnyc.com/wp-content/uploads/2014/05/20140423_Es_bar-9571_ENF.tif.jpg"; 
    
    var veganFriendly = $(e.target).find('[name=veganFriendly]:checked').val() ? "Vegan Friendly" : null;
    var lightKitchen = $(e.target).find('[name=lightKitchen]:checked').val() ? "light kitchen" : null;
    var liveShows = $(e.target).find('[name=liveShows]:checked').val() ? "live shows" : null; 
    var espressoFriends = $(e.target).find('[name=espressoFriends]:checked').val() ? "espresso & friends" : null;
    var smokingArea = $(e.target).find('[name=smokingArea]:checked').val() ? "Outdoor smoking area" : null;
    var gayFriendly = $(e.target).find('[name=gayFriendly]:checked').val() ? "gay friendly" : null;
    var dogAllowd = $(e.target).find('[name=dogAllowd]:checked').val() ? "dog allowd" : null;
    var acInside = $(e.target).find('[name=acInside]:checked').val() ? "ac inside" : null;

    var bar = {
      img1: image1,
      img2: image2,
      title: $(e.target).find('[name=title]').val(),
      offer: $(e.target).find('[name=offer]').val(),
      startHappyHour: convertToFloat($(e.target).find('[name=startTime]').val()),
      endHappyHour: convertToFloat($(e.target).find('[name=endTime]').val()),
      ageLimit: $(e.target).find('[name=ageLimit]').val(),
      url: $(e.target).find('[name=url]').val(),
      email: $(e.target).find('[name=email]').val(),
      mobile: $(e.target).find('[name=mobile]').val(),
      address: place.formatted_address,
      loc : { type: "Point", coordinates: [ lon, lat ] },
      veganFriendly: veganFriendly,
      lightKitchen: lightKitchen,
      liveShows: liveShows,
      espressoFriends: espressoFriends,
      smokingArea: smokingArea,
      gayFriendly: gayFriendly,
      dogAllowd: dogAllowd,
      acInside: acInside
    };

      Meteor.call('barInsert', bar, function(error, result) {
        if (error)
          return alert(error.reason);

      if (result.barExists) {
        alert("This bar has already exists");
      } else {
        Router.go('barsList');        
      }
    });
  }
});

Template.addNewBar.onRendered(function() {
    this.$('#startTime').datetimepicker({
      format: 'HH:mm',
      // use24hours = true
    });
    this.$('#endTime').datetimepicker({
      format: 'HH:mm',
      // use24hours = true
    });
});