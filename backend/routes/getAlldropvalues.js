const express = require('express');
const router = express.Router();
const Mobile = require('../models/mobile');


router.get('/', async (req, res) => {
    try {
        let mobiles = await Mobile.find();
        const data = {};
        let Name = [];
        let Price = [];
        let Type = [];
        let Processor = [] ;
        let Memory = [];
        let Os = [];
        for (let mobile of mobiles) {
            if (mobile) {
                Name.includes(mobile.name) ? null : Name.push(mobile.name);
            }
            if (mobile) {
                Price.includes(mobile.price) ? null : Price.push(mobile.price);
            } if (mobile) {
                Type.includes(mobile.type) ? null : Type.push(mobile.type);
            } if (mobile) {
                Processor.includes(mobile.processor) ? null : Processor.push(mobile.processor);
            } if (mobile) {
                Memory.includes(mobile.memory) ? null : Memory.push(mobile.memory);
            } if (mobile) {
                Os.includes(mobile.os) ? null : Os.push(mobile.os);
            }
        };
        data["name"] = Name;
        data["price"] = Price;
        data["type"] = Type;
        data["processor"] = Processor;
        data["memory"] = Memory;
        data["os"] = Os;
        res.status(200).json({
            data: data,
            error: null,
            message: "all dropvalues are found"
        })
    } catch (error) {
        res.status(500).json({
            data: [],
            error: error.message,
            message: "Can't found"
        });
    }
})
module.exports = router;