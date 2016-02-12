Bars._ensureIndex({'loc' : '2dsphere'});

Meteor.publish("bars", function (coordinates, radius) { 
  Logger.log("coordinates in publish: ", coordinates);
  Logger.log("radius: in publish", radius);
  
  if (!coordinates.lon) {
    Logger.log("server dosent get coordinates");
    return;
  }

  Logger.log("server get coordinates");

  if (!radius)
    radius = 20000;

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