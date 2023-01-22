const express = require('express');
const app = express();
const path = require('path');
require("../db/server.js");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());

const static_path = path.join(__dirname + "../public");
app.use(express.static(static_path));

app.get('/', function(req, res){
    res.send("Welcome to Job-Portal!!");
});

app.listen(3000, function(){
    console.log("Server is listening on port 3000.");
});