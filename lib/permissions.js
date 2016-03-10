function adminUser(userId) {
    var adminUser = Meteor.users.findOne({_id: userId});
    return (adminUser && 'admin' === adminUser.roles[0]);
}

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && (doc.userId === userId || adminUser(userId)) ;
}