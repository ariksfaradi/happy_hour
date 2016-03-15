Bars = new Mongo.Collection('bars');

Bars.allow({
  update: function(userId, bar) { return ownsDocument(userId, bar); },
  remove: function(userId, bar) { return ownsDocument(userId, bar); },
});

var LocationSchema = new SimpleSchema({
  type : {
    type : String,
    autoValue: function() {
      return "Point";
    }
  },
  coordinates: {
    type: [Number],
    decimal: true 
  }
});

Bars.attachSchema(
	new SimpleSchema({
		userId: {
			type: String,
			label: "userId",
			optional: true
		},
		barManager: {
			type: String,
			label: "barManager",
			optional: true	
		},
	    submitted: {
	    	type: Date,
	    	label: "submitted",
			optional: true
	    },
		title: {
			type: String,
			label: "title",
			max: 200
		},
		offer: {
			type: String,
			label: "offer",
			optional: true
		},
		startHappyHour: {
			type: Number,
			decimal: true,
			label: "startHappyHour",
			optional: true
		},
		endHappyHour: {
			type: Number,
			decimal: true, 
			label: "endHappyHour",
			optional: true,
		},
		veganFriendly: {
			type: String,
			label: "veganFriendly",
			optional: true
		},
		lightKitchen: {
			type: String,
			label: "lightKitchen",
			optional: true
		},
		liveShows: {
			type: String,
			label: "liveShows",
			optional: true
		},
		espressoFriends: {
			type: String,
			label: "espressoFriends",
			optional: true
		},
		smokingArea: {
			type: String,
			label: "smokingArea",
			optional: true
		},
		gayFriendly: {
			type: String,
			label: "gayFriendly",
			optional: true
		},
		dogAllowd: {
			type: String,
			label: "dogAllowd",
			optional: true
		},
		acInside: {
			type: String,
			label: "acInside",
			optional: true
		},
		url: {
			type: String,
			optional: true
		},
		loc: {
			type: LocationSchema,
			optional: true
		},
		img1: {
			type: String,
			defaultValue: "http://telavivparty.com/wp-content/uploads/2014/11/montage.jpg",
			optional: true 
		},
		img2: {
			type: String,
			defaultValue: "http://e-barnyc.com/wp-content/uploads/2014/05/20140423_Es_bar-9571_ENF.tif.jpg",
			optional: true 
		},
		ageLimit: {
			type: Number,
			optional: true 
		},
		email: {
			type: String,
			optional: true 
		},
		moblie: {
			type: String,
			optional: true 
		}
	})
);


Meteor.methods({
	barInsert: function(barAttributes) {
		check(Meteor.userId(), String);
		// check(barAttributes, {
		// 	title: String,
		// 	offer: String,
		// 	startHappyHour: Number,
		// 	endHappyHour: Number,
		// 	veganFriendly: String,
		// 	lightKitchen: String,
		// 	liveShows: String,
		// 	esperssoFriends: String,
		// 	smokingArea: String,
		// 	img1: String,
		// 	img2: String
		// });
		
		var isExists = Bars.findOne({title: barAttributes.title, loc: barAttributes.loc});
		if (isExists) {
			return {
				barExists: true,
				_id: isExists._id
			}
		}

	    var user = Meteor.user();
	    var bar = _.extend(barAttributes, {
	      userId: user._id, 
	      barManager: user.username, 
	      submitted: new Date()
	    });

		var barId = Bars.insert(bar);

		console.log(bar);
		return {
			_id:barId
		};
	}
});