var http = require('http');
var host = "127.0.0.1";
var port = "3000";

var onRequest = function(request, response) {
	response.end('asdf');
}

var start = function() {
	http.createServer(onRequest).listen(port, host, function() {
		console.log("server is started on: " + host + ":" + port);
	});
}

exports.start = start;