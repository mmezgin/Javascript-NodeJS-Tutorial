const express = require('express');
const app = express();

const signIn = require('./routes/signIn');


app.use((req, res, next) => {
    const isLogin = true; //make it false for test
    if (isLogin)
        next();
    else
        res.send("Please logIn First")
});
app.use('/', signIn);
app.listen(3030, () => {
    console.log("Successful app.js");

});