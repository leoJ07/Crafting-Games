const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/", (req, res) => {
    res.redirect("menu");
})

app.get("/menu", (req, res) => {
    fs.readFile("menu.html", (err, data) => {
        if(err){
           console.log(err);
        } else {
            res.send(data);
        }
    });
});

app.get("/game", (req, res) => {
    fs.readFile("index.html", (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.send(data);
        }
    });
});

app.listen(process.env.PORT || 3000);


