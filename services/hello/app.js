const http = require('http');
const os = require('os');

console.log("Kub Node server starting up ....");

var handler = function(req, res) {
	console.log("client ip ="+req.connection.remoteAddr);
	res.writeHead(200);
	res.end("os.hostname="+os.hostname);
};

var www = http.createServer(handler);
www.listen(8080);
