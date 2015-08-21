var http = require('http');
var cassandra = require('cassandra-driver');
var async = require('async');
var Apollo = require('apollo-cassandra')


var connection = {
	"hosts": [
		"127.0.0.1"
	],
	"keyspace": "mykeyspace"
};

var apollo = new Apollo(connection);
apollo.connect(function(err) {
	if (err) throw err;
	else {
		console.log(apollo)
		console.log("________________________________________________________________________________________-");
		apollo.close(function(err) {
			console.log("hola");


			var userSchema = {

				fields: {
					user_id: "int",
					name: "text",
					email: "text"
				},
				key: ["user_id"]
			};
			var User = apollo.add_model('users', userSchema);

			User.find({
				user_id: 3
			}, function(err, User) {
				if (err) {
					console.log(err);
					throw err;
				}
				console.log(apollo)
				console.log(User[0].name);
			})
		});



	}
	/* do amazing things! */
})