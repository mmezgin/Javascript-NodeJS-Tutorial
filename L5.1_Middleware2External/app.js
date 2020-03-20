const express = require('express');
const app = express();

const signIn = require('./routes/signIn');

const isLogin = require("./external/isLogin");

app.use(isLogin);
app.use('/', signIn);
app.listen(3030, () => {
    console.log("Successful app.js");

});