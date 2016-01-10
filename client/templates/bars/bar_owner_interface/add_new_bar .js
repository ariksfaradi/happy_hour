Template.addNewBar.events({
  'submit form': function(e, b){
    var newBar = {
      name: $('#barName').val(),
      price: $('#itemPrice').val(),
      ageLimit: $('#ageLimit').val(),
      email: $('#email').val(),
      mobile: $('mobile').val(),
      address: $('address').val(),      
      // <textarea rows="1"  name="address" ></textarea><br>
      city: $('city').val()
    };

    Bars.insert(newBar);
 
    $('#addNewBarForm').find('input:text').val('');
    // $('#itemStore').focus();
    return false;
  }
});