const express = require('express');
const app = express();

const signIn = require('./routes/signIn');

app.use('/', signIn);

app.listen(3000, () => {
    console.log("Successful app.js");

});