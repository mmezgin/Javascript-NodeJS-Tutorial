const express = require('express');
const app = express();

app.set("view engine", "pug");
app.use(express.static("static"))
app.get('/', (req, res) => {
    res.render("index.pug");
});

app.post('/a', (req, res) => {
    res.send("post method");
});

app.all('/a', (req, res) => {
    res.send("all here");
});

app.listen(5500, () => {
    console.log("Successful");

});