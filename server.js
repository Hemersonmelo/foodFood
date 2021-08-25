/*var http = require('http');
//const { error } = require('console');
var fs = require('fs');

function onRequest(Request, response) {
    response.writeHead(200, { 'content-type': 'text/htm' });
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('file not found!');
        } else {
            response.write(data);
        }
        response.end()

    });
}

http.createServer(onRequest).listner(8080);
*/
const express = require('express');
const app = express();
//const path = require('path');

app.get("/", (Request, response) => {
    response.sendFile(__dirname + '/index.html');
});

//const PORT = process.env.PORT || 3333;    
app.listen(process.env.PORT || 3333, () => {
    //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});