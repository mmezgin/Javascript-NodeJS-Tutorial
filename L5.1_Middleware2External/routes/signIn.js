const express = require('express');
const router = express.Router();

router.get('/signIn', (req, res) => {
    res.send("singIn Page get");
});

router.post('/signIn', (req, res) => {
    res.send("singIn Page post");
});



module.exports = router;