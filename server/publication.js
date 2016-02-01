Meteor.publish("bars", function (coordinates, radius) { 
  if (!coordinates.lon) {
    return;
  }

  if (!radius)
    radius = 20000;
     
  console.log("coordinates: ", coordinates);
  console.log("radius: ", radius);

  return Bars.find({
    loc: {
      $near:{
        $geometry: {
          type: "Point",
          coordinates : [ coordinates.lon, coordinates.lat]  
        },
        $maxDistance: radius  //meters
      }
    }
  });
});