var fs = require('fs');
var path = require('path');

function index(request, response) {
	fs.readFile(path.join(__dirname, 'views', 'index.html'), function(err, html) {
		if (err) {
			throw err;
		} else {
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(html);
			response.end();
		}
	});
}

exports.index = index;
