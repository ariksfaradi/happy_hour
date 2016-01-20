Meteor.publish("bars", function (coordinates) { 
    console.log("coordinates: ", coordinates);
   if (!coordinates.lon) {
    return;
   } 
  // var geo = new GeoCoder();
  // var result = geo.geocode('29 champs elysée paris');
  // console.log(result);
  // return Bars.find();
   return Bars.find({
      loc: {
        $near:{
          $geometry: {
            type: "Point",
            coordinates : [ coordinates.lon, coordinates.lat]  
          },
          $maxDistance: 4000   //meters
        }
      }
    });
});