Bars = new Mongo.Collection('bars');

Bars.allow({
	insert: function(userId, doc) {
		// only allow create bar if you loged in
		return !!userId;
	}
});