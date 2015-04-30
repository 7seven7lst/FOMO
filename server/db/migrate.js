var DB=require('./dbConfig');


// this is our schema example:
var userTable = function (userTable) {
  userTable.increments('id').primary();
  userTable.string('name').notNullable().unique();
  //userTable.string('password');
  userTable.string('email').notNullable().unique();
};

var eventTable = function (eventTable) {
  eventTable.increments('id').primary();
  eventTable.text('info').notNullable();
  eventTable.boolean('triggered').notNullable();
};


var commentTable=function(commentTable) {
  commentTable.increments('id').primary();
  commentTable.integer('user_id').notNullable().unsigned() ;
  commentTable.integer('event_id').notNullable().unsigned() ;
  commentTable.text('commenttext').notNullable();
  commentTable.timestamps();
};

var tagTable=function(tagTable) {
  tagTable.increments('id').primary();
  tagTable.string('tagname').notNullable();
};

var eventTagJointTable=function(userEventJointTable) {
  userEventJointTable.increments('id').primary();
  userEventJointTable.integer('event_id').notNullable().unsigned() ;
  userEventJointTable.integer('tag_id').notNullable().unsigned() ;
}

var userEventJointTable=function(userEventJointTable) {
  userEventJointTable.increments('id').primary();
  userEventJointTable.integer('user_id').notNullable().unsigned().references('users.id');
  userEventJointTable.integer('event_id').notNullable().unsigned().references('events.id');
};




// this executes the schema operation:
DB.schema.hasTable('users').then(function(exists) {
  if (! exists) {
    DB.schema.createTable('users', userTable).then(function () {
      console.log('users Table is Created!');
    });
  }
});

DB.schema.hasTable('events').then(function(exists) {
  if (! exists) {
    DB.schema.createTable('events', eventTable).then(function () {
      console.log('events Table is Created!');
    });
  }
});




DB.schema.hasTable('comments').then(function(exists) {
  if (! exists) {
    DB.schema.createTable('comments', commentTable).then(function () {
      console.log('comments Table is Created!');
    });
  }
});

DB.schema.hasTable('tags').then(function(exists) {
  if (! exists) {
    DB.schema.createTable('tags', tagTable).then(function () {
      console.log('tags Table is Created!');
    });
  }
});

DB.schema.hasTable('events_tags').then(function(exists) {
  if (! exists) {
    DB.schema.createTable('events_tags', userEventJointTable).then(function () {
      console.log('events_tags Table is Created!');
    });
  }
});

DB.schema.hasTable('users_events').then(function(exists) {
  if (! exists) {
    DB.schema.createTable('users_events', userEventJointTable).then(function () {
      console.log('users_events Table is Created!');
    });
  }
});



/* example insertion
DB('movies')
   .insert({title: "The Artist", year: 2010})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });
*/
