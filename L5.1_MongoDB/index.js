const express = require("express");
const app = express();
const mongoose = require('mongoose');


app.get('/', (req, res) => {
    res.send("Nescafe Express");
});

mongoose.connect('mongodb://localhost/abc', { useNewUrlParser: true });
mongoose.connection.on('open', () => {
    console.log("Mongo db connection successful !");
});
mongoose.connection.on('error', (err) => {
    console.log("MongoDB connection is failed ! ", err);
});

app.listen(3333, () => {
    console.log("nice !");
});