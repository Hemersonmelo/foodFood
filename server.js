const express = require('express');
const app = express();
app.use(express.static('public'))
    //const path = require('path');

app.get("/", (Request, response) => {
    response.sendFile(__dirname + '/index.html');
});

//const PORT = process.env.PORT || 3333;    
app.listen(process.env.PORT || 3333, () => {
    //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});