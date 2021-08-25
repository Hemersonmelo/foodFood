const express = require('express');
const app = express();
app.use(express.static('public'));

app.get("/", (Request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, () => {
    //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});