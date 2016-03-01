Template.header.helpers({
	isAdmin: function() {
		console.log("user:", Meteor.user());
		return Meteor.user() && 'admin' === Meteor.user().roles[0];
	}

})