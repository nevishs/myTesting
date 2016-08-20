
var http = require('http');
var fs = require('fs');

/* function onRequest(request, response) {
		console.log("A user make a request" + request.url);
		response.writeHead(200,{"Context-Type": "text/plain"});
		response.write("My HTTP Response");
		response.end();
} */

function onRequest(request, response) {
		console.log("A user make a request" + request.url);
		if ( request.method == 'GET' && request.url == '/' ) {
			response.writeHead(200,{"Context-Type": "text/html"});
			fs.createReadStream("./index.html").pipe(response);
		} else {
			send404Response(response);
		}	
		
}

function send404Response(response){
		response.writeHead(404,{"Context-Type": "text/plain"});
		response.write("ERROR");
		response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server is running");