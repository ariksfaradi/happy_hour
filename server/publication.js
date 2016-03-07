Bars._ensureIndex({'loc' : '2dsphere'});

// hours>= start %% hours[0] <= end

Meteor.publish("bars", function (coordinates, radius, hours) { 
  Logger.log("coordinates in publish: ", coordinates);
  Logger.log("radius: in publish", radius);
  lowerBoundHour = convertToFloat(hours.lowerBoundHour);
  upperBoundHour = convertToFloat(hours.upperBoundHour);
  console.log(lowerBoundHour , upperBoundHour);
  if (!coordinates.lon) {
    Logger.log("server dosent get coordinates");
    return;
  }

  Logger.log("server get coordinates");
  // var start = moment(hours.lowerBoundHour).toDate();
  // console.log(start);
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
    },
    $or: [
      {$and: [{startHappyHour: {$lt: lowerBoundHour}},{endHappyHour: {$gte: lowerBoundHour}}]},
      {$and: [{startHappyHour: {$gt: lowerBoundHour}},{startHappyHour: {$lt: upperBoundHour}}]}
    ]
  });
});