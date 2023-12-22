const express = require('express');
const allMobiles = require("./allMobiles");
const getAlldropdowns = require("./getAlldropvalues");
const createMobile  = require("./createMobiles");
const dropdowns = require('./dropdowns');

const router = express.Router();

router.use('/mobiles',allMobiles);
router.use('/mobile',createMobile);
router.use('/dropdowns',getAlldropdowns);
router.use('/filterdropdown',dropdowns);


module.exports = router;