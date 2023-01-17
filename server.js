const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/placementDB');

app.listen(3000, function(){
    console.log("Server is listening on port 3000.");
});