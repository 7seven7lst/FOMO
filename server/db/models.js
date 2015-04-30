var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'password',
        database : 'myapp_test',
        charset  : 'utf8'
  }
});
var Bookshelf = require('bookshelf')(knex);
var DB=require('./dbConfig');

var User = Bookshelf.Model.extend({
    tableName: 'users', 
    events: function () {
      return this.belongsToMany(events, 'users_events');
    }
});

var Event = Bookshelf.Model.extend({
    tableName: 'events', 
    users: function () {
      return this.belongsToMany(users, 'users_events');
    }
});

var Users = Bookshelf.Collection.extend({
  model: User
});

var Events = Bookshelf.Collection.extend({
  model: Event
});


Users.forge()
    .fetch()
    .then(function (collection) {
      console.log(collection.models[0].attributes);
    })
    .otherwise(function (err) {
     console.log(err);
    });

DB('users')
   .insert({name: "The Artist", email: '2010'})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });

/*
DB.select('*').from('users')
.then(function(rows){
    console.log(rows);
})

*/




