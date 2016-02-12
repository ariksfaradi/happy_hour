Bars = new Mongo.Collection('bars');

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
		title: {
			type: String,
			label: "title",
			max: 200
		},
		offer: {
			type: String,
			label: "offer"
		},
		url: {
			type: String
		},
		loc: {
			type: LocationSchema
		},
		// ageLimit: {
		// 	type: Number
		// },
		// email: {
		// 	type: String
		// },
		// moblie: {
		// 	type: String
		// }
	})
);


Bars.allow({
	insert: function(userId, doc) {
		// only allow create bar if you loged in
		return !!userId;
	}
});