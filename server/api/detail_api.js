const express = require('express')
const { text_to_speech } = require('../controller/detail_controller');
const router = express.Router()
router.get('/',text_to_speech);
module.exports = router