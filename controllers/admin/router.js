const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const dbRoute = "";

mongoose.connect(
    dbRoute,
    {useNewUrlParser: true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



module.exports = {
    router: router
}