var http = require('http');
var host = "127.0.0.1";
var port = "3000";


var start = function(router, handle) {
	function onRequest(request, response) {
		router(handle, request, response);
	};

	http.createServer(onRequest).listen(port, host, function() {
		console.log("server is started on: " + host + ":" + port);
	});
}

exports.start = start;
