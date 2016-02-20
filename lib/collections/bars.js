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
			label: "offer",
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
		}
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