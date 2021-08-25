const express = require("express");
const app = express();
//const path = require('path');

app.get("/teste", (Request, response) => {

    return response.send("ola mundo doido");
});

//const PORT = process.env.PORT || 3333;    
app.listen(process.env.PORT || 3333, () => {
    //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});