const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index'); //res.send(message)
});
app.listen(3500, () => {
    console.log("Express server worked !");
});