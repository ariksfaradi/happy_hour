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
		console.log(Session.get('radius'));
		return Meteor.subscribe("bars", {lon: Session.get('lon'), lat: Session.get('lat')}, Session.get('radius') );
	}
});

Router.route('/',{name: 'barsList'});
Router.route('/addNewBar', {name: 'addNewBar'});
Router.route('/discoverySettings', {name: 'discoverySettings'});