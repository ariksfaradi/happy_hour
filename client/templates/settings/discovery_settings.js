
Template.discoverySettings.events({
  'submit form': function(e) {
    var newRadius = parseInt($(e.target).find('[name=radius]').val());  
 	var newAge = $(e.target).find('[name=age]').val();
    console.log("radius = ", newRadius);
    
    Meteor.users.update({_id: Meteor.userId()}, {$set: {
    	"profile.discoverySettings.radius": newRadius
    }});
  }
});


// Template.discoverySettings.rendered = function(){
//   document.getElementById("slider").oninput = function() {
//       ShowCurrent()
//   };
// }

// function ShowCurrent() {
//    var val = document.getElementById("slider").value //gets the oninput value
//     // var val = document.getElementsByClassName("slider").value //gets the oninput value
//     console.log(val);
//     document.getElementById("output").innerHTML = val; //displays this value to the html page
   
// }

// var settingsCon = {
//  searchDistance: 50,
//  ageLimit: 10
// };

// console.log(settingsCon);

// Template.discoverySettings.events({
//   'change input[type=range]': function(event){
//      var sliderValue = event.currentTarget.value;
//      var id = event.currentTarget.id;
//      console.log(id);
//      Session.set('sliderValueIs', sliderValue);
//      console.log(sliderValue);
//      //then you can get this session and return it in a helper to display on your page
//   }
// });

// function sliderChange(val) {
//     document.getElementById('output').innerHTML = val;
// }
// document.getElementById('slider').value = 50;

