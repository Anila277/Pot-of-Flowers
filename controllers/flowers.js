// CONTROLLER DEPENDENCIES
const express = require('express');
const router = express.Router();
const Flower = require('../models/flower');

// SEED ROUTE
router.get('/seed', (req, res) => {
    const data = require('../data.json');
    Flower.deleteMany({}, (err, result) => {
        Flower.insertMany(data, (err, result) => {
            res.redirect('/flowers');
        });
    });
});

// REMEMBER -INDUCES-

// INDEX
router.get('/', (req, res) => {
    Flower.find({}, (err, flowers) => {
        res.render('flowers/index.ejs', {
            'flowers': flowers
        });
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('flowers/new.ejs');
});

// DELETE

