const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.redirect("/menu")
})

app.get("/game", (req, res) => {
    res.sendFile("./public/game.html", {root: __dirname});
});

app.get("/menu", (req, res) => {
    res.sendFile("./public/menu.html", {root: __dirname});
});


app.listen(process.env.PORT || 3000);
