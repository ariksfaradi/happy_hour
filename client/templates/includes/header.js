Template.header.helpers({
	isAdmin: function() {
		return Meteor.user() && 'admin' === Meteor.user().roles[0];
	}

})