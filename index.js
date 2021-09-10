const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser')
const db = require("./models");
const controller = require("./controller/controller")

app.use(bodyParser.json())

db.sequelize.sync();

app.post("/team", (req, res) => {
    controller.createTeam(req, res);
})

app.post("/notify", (req, res) => {
    controller.notify(req, res);
})


app.listen(3000, () => console.log(`Its working on port ${port}`))