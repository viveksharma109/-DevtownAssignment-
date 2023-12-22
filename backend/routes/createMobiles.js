const express = require('express');
const Mobile = require('../models/mobile');
const router = express.Router();

router.post('/', async (req, res) => {
    const { Name ,Price,Type,Processor,Memory,Os } = req.body;
    try {
        const newMobile = new Mobile({
            name:Name,
            price:Price,
            type:Type,
            processor:Processor,
            memory:Memory,
            os:Os
        });
        const savedMobile = await newMobile.save();
        res.status(201).json({
            data: savedMobile,
            message: 'Mobile created successfully'
        });
    } catch (error) {
        res.status(500).json({
            data: [],
            error: error.message,
            message: "Can't create mobile"
        });
    }
});

module.exports = router;