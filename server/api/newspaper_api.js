const express = require('express')
const { get_newspapers } = require('../controller/newspaper_controller')
const router = express.Router();
router.get('/:nameCategory',get_newspapers);
module.exports = router;
