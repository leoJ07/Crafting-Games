const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    fs.readFile("index.html", (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.send(data);
        }
    });
});

app.listen(process.env.PORT || 3000);


