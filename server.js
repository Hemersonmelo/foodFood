const express = require("express");
const app = express();
const path = require('path');

app.get("/", (Request, response) => {
    // response.sendFile("index.html")
    console.log('bumbum guloso');
    console.log(path.join('/index.html'));
    //response.sendFile(path.join(__dirname + '/index.html'));
    response.send('oi xuxu');
});

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, function() {
    //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


const getExtension = fileName => (
    fileName.substr(fileName.lastIndexOf('.') + 1)
)

app.get('*', ({ url }, res) => {
    let filePath
    if (['js', 'css', 'png', 'jpg'].includes(getExtension(url))) {
        filePath = __dirname + '/public/' + url
    } else {
        filePath = __dirname + '/public/' + url + '/index.html'
    }
    res.sendFile(filePath)
    console.log(url);
});