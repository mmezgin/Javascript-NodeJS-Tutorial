const express = require("express");
const router = express.Router();
//models
const Car = require('../models/Car');


router.post('/new', (req, res) => {
    const car = new Car({
        brand: "Mercedes-Benz",
        brandnew: false,
        accidents: [
            { ac: "left-front door" },
            { ac: "spoiler" }
        ],
        model: {
            bb: "E180 Exclusive",
            year: 2017
        }
    });
    car.save((err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);
    });

});

module.exports = router;