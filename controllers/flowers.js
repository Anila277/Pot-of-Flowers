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
router.delete('/:id', (req, res) => {
    Flower.findByIdAndDelete(req.params.id, (err, deletedFlower) => {
        console.log('deletedFlower: ', deletedFlower);
        res.redirect('/flowers');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    Flower.findByIdAndUpdate(req.params.id, req.body, (err, previousFlowerVersion) => {
        res.redirect('/flowers/' + req.params.id);
    });
});

// CREATE
router.post('/', (req, res) => {
    Flower.create(req.body, (err, createdFlower) => {
        res.redirect('/flowers');
    });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Flower.findById(req.params.id, (err, foundFlower) => {
        res.render('flowers/edit.ejs', {
            flower: foundFlower
        });
    });
});
