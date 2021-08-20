const express = require("express");
const app = express();

app.get("/index.html", (Request, response) => {
    response.sendFile(index.html);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listning on port" + PORT);
})