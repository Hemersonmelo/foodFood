const express = require("express");
const app = express();

app.get("/", (Request, response) => {
    response.sendFile("helo world"
        index.html);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listning on port" + PORT);
})