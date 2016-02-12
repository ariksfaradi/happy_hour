Logger = new Loggly({
    token: "ca06ae32-c566-4ac7-ad30-c3e53122b02a",
    subdomain: "arikSfaradi",
    auth: {
      username: "sfa_arik",
      password: "trhe17Lo"
    }
    //
    // Optional: Tag to send with EVERY log message
    //
    // tags: ['global-tag'],
    // Optional: logs will be stored in JSON format
    // json: true
});	


// Meteor.methods({
// 	clientLog: function(message) {
// 		if (Logger !== null && Logger !== 'undefined') {
// 			var message = _.values(arguments);
// 			message = message.toString().replace(/,/g,' ');
// 			Logger.log(message, ['meteorClient', hostname, 'log']);
// 		} else {
// 			console.error('SB.logger is not set - client is unable to send logs to server');
// 		}
// 	}
// });

// Meteor.call('clientLog', 'this is a test'); //example of a call on client

// Logger.log("first log from meteor");
// Logger.info("it will store this message with info tag");
// Logger.info("all", "arguments", "will be stored");
// Logger.info("my fancy object", {fancy: true});