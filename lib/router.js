//***********************************
// Author: Arik Sfaradi
// Creation date: 05/01/2016
// Last modified: 05/01/2016
// Description: mapping the routes 
//***********************************

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	// waitOn: function () {
	// 	var radius = Accounts.user() ? Accounts.user().profile.discoverySettings.radius : 20000;
	// 	// return Meteor.subscribe("bars", {lon: 32.0859483, lat: 34.7697364}, radius );
	// 	return Meteor.subscribe("bars", {lon: Session.get('lon'), lat: Session.get('lat')}, radius );
	// }
});

Router.route('/',{name: 'barsList'});
Router.route('/addNewBar', {name: 'addNewBar'});
Router.route('/discoverySettings', {name: 'discoverySettings'});
Router.route('/admin', {name: 'admin'});

Router.route('/barsList/:_id', {
  name: 'barPage',
  data: function() { return Bars.findOne(this.params._id); }
});

Router.route('/bar/:_id', {
  name: 'googleMaps',
  data: function() { return Bars.findOne(this.params._id); }
});

Router.route('/barsList/:_id/edit', {
  name: 'barEdit',
  data: function() { return Bars.findOne(this.params._id); }
});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
  			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

var requireAdmin = function() {
	if ( Meteor.user() && 'admin' === Meteor.user().roles[0]) {
		this.next();
	} else if (Meteor.loggingIn()) {
		this.render(this.loadingTemplate);
	} else {
		this.render('accessDenied');
	}
}

Router.onBeforeAction(requireAdmin, {only: 'admin'});
Router.onBeforeAction(requireLogin, {only: 'discoverySettings'});
Router.onBeforeAction(requireLogin, {only: 'addNewBar'});
