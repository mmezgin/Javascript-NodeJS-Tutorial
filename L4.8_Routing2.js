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

app.get('/users/:id/:postId?', (req, res) => { //postId has not to be fill
    //  res.send(req.params);
    res.send(req.params);
});

app.listen(5500, () => {
    console.log("Successful");

});