var server = require('./server');
var router = require('./router');
var routes = require('./routes');

var handler = {};
handler['/'] = routes.index;


server.start(router, handler);
