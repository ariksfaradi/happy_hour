Accounts.onCreateUser(function (option, user) {
	var defaultRadius = 4000;
	var defaultAge = 18;

	if (user.profile == undefined)
		user.profile = {};
	 
	 _.extend(user.profile, {
	 	discoverySettings : {radius: defaultRadius, age: defaultAge}
	 });

	return user;
});


////////////////////////////////////////////////////////////////////
// Create Test Users
//

if (Meteor.users.find().fetch().length === 0) {

	console.log('Creating users: ');

	var users = [
	    {name:"Yael",roles:['admin']},
	    {name:"Uri",roles:['admin']},
	    {name:"Arik",roles:['admin']}
	    // {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
	    // {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
	    // {name:"Admin User",email:"admin@example.com",roles:['admin']}
	  ];

	_.each(users, function (userData) {
		var id, user;
  
	  	console.log("user:", userData);

		  id = Accounts.createUser({
		    password: "apple1",
		    username:  userData.name
		  });

		  // email verification
		  // Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});
		// Meteor.users.update({_id: id});
	  	Roles.addUsersToRoles(id, userData.roles);

	});
}
