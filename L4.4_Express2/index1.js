const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/hi', (req, res) => {
    res.render('index.pug', { name: 'Mert', surname: 'ezgin', job: 'jr.Developer' });
});

app.listen(5500, () => {
    console.log("Express runner");
});