const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    console.log("request taken");
    fs.readFile("index.html", (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.send(data);
        }
    });
});

app.listen(3000);


