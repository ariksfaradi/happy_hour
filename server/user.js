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