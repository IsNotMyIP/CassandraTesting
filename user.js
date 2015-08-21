var userSchema = {

	fields: {
		user_id: "int",
		name: "text",
		email: "text"
	},
	key: ["user_id"]
};

//Get an user
// Params:
// - apollo: apollo conected to cassandra
// Return:
// - user object.
exports.getUser = function(apollo, id_user, cb) {
	var User = apollo.add_model('users', userSchema);
	
	User.find({
		user_id: id_user
	},
	function(err, User) {
		if (err) {
			console.log(err);
			throw err;
		}
		else{
		cb(User);
		// console.log(User[0].name);
		// res.send('me la va a chupar... ' + User[0].name);
		}
	})
}