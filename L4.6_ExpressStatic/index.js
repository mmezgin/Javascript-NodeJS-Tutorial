const express = require('express');
const app = express();

app.set("view engine", "pug");
app.use(express.static("static"))
app.get('/', (req, res) => {
    res.render("index.pug");
});

app.listen(5500, () => {
    console.log("Succesfull");

});