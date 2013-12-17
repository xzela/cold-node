
module.exports = function(handler, request, response) {
	var uri = request.url;
	console.log('handling route for: ' + uri);
	if (typeof handler[uri] === 'function') {
		console.log('route: ' + uri + ' is known');
		return handler[uri](request, response);
	} else {
		console.log('unknown route: ' + uri);
		response.end('404');
	}
};
