Meteor.publish("bars", function (coordinates) { 
    console.log("coordinates: ", coordinates);
   if (!coordinates.lon) {
    return;
   } 
   return Bars.find({
      loc: {
        $near:{
          $geometry: {
            type: "Point",
            // coordinates : [ 0, 0]  
            coordinates : [ coordinates.lon, coordinates.lat]  
          },
          $maxDistance: 2000   //meters
        }
      }
    });
});