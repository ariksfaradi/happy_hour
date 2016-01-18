Template.addNewBar.events({
  'submit form': function(e, b){
    var lon = parseFloat($('#lon').val());
    var lat = parseFloat($('#lat').val());   
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
      address: $('address').val(),
      loc : { type: "Point", coordinates: [ lon, lat ] }
    };

    Bars.insert(newBar);
 
    $('#addNewBarForm').find('input:text').val('');
    // $('#itemStore').focus();
    return false;
  }
});