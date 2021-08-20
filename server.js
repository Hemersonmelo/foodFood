const express = require("express");
const app = express();

app.get("/", (Request, response) => {
    response.sendFile("index.html")
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