//***********************************
// Author: Arik Sfaradi
// Creation date: 05/01/2016
// Last modified: 05/01/2016
// Description: mapping the routes 
//***********************************

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function () {
		var radius = Accounts.user() ? Accounts.user().profile.discoverySettings.radius : 20000;

		return Meteor.subscribe("bars", {lon: Session.get('lon'), lat: Session.get('lat')}, radius );
	}
});

Router.route('/',{name: 'barsList'});
Router.route('/addNewBar', {name: 'addNewBar'});
Router.route('/discoverySettings', {name: 'discoverySettings'});

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

Router.onBeforeAction(requireLogin, {only: 'discoverySettings'});
Router.onBeforeAction(requireLogin, {only: 'addNewBar'});
