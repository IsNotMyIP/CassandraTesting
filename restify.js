var restify = require('restify');
var Apollo = require('apollo-cassandra')

var server = restify.createServer();
server.use(restify.CORS());
//APollo config
var connection = {
	"hosts": [
		"127.0.0.1"
	],
	"keyspace": "mykeyspace"
};

var apollo = new Apollo(connection);

function send(req, res, next) {
	res.send('hello ' + req.params.name);
	return next();
}

function pollatron(req, res, next) {
	var user = require('./user.js');
	var id_user = req.params.polla;
	user.getUser(apollo, id_user, function(data){
		console.log(data[0].name);
		res.send('me la va a chupar... ' + data[0].name);
	return next();
	
	});
}



server.get('/hello', function create(req, res, next) {
	res.send("Carlos pillin")
	console.log('je');
	return next('polla');
});
 

server.get('/hello/:polla', pollatron)


server.post('/postUser', function(err, res){
	console.log("posted");
	res.send("pillado joputa");
	return next();
})

server.listen(5000);