const express = require("express");
const app = express();

app.get("/", (Request, response) => {
    response.sendFile("index.html")
});

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});