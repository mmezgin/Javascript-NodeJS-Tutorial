const express = require('express');
const router = express.Router();

router.get('/singIn', (req, res) => {
    res.send("singIn Page get");
});

router.post('/singIn', (req, res) => {
    res.send("singIn Page post");
});

module.exports = router;