const express = require('express');
const Mobile = require('../models/mobile');
const router = express.Router();

router.get('/', async (req, res) => { 
    try {
        let query = {};
        const { name, price, type, processor, memory, os } = req.query;

        if (name) {
            query.name = name;
        }
        if (price) {
            query.price = price;
        }
        if (type) {
            query.type = type;
        }
        if (processor) {
            query.processor = processor;
        }
        if (memory) {
            query.memory = memory;
        }
        if (os) {
            query.os = os;
        }
        const mobiles = await Mobile.find(query);
        if (!mobiles || mobiles.length === 0) {
            return res.status(404).json({ message: 'No mobile found for the given query' });
        }
        res.json(mobiles);
    } catch(error) {
        res.status(500).json({
            message: 'Error retrieving data',
            error: error.message 
        });
    }
});

module.exports = router;
