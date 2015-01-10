// general server-side code
// (will get specific if needed)
Meteor.publish('snippets',function(){
  return Snippets.find({owner:this.userId});
  //this.userId is the logged in user ID for the publish "session"
})

Meteor.publish('snippets-admin',function(){
  return Snippets.find({}); // we want ALL URLs;
});

Snippets.allow({
  insert: function(userId,fields){
    return(userId); // make sure user is logged in.
  },
  update: function(userId,fields){
    return(userId); // same as above - make sure user is logged in.
  }
})
