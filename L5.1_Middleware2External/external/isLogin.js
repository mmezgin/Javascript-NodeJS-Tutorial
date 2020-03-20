const isLogin = (req, res, next) => {
    const isLogin = false; //make it false for test
    if (isLogin)
        next();
    else
        res.send("Please logIn First")
}
module.exports = isLogin;