const express = require('express')
const { get_newspaper_by_category_name } = require('../controller/newspaper_controller')
const router = express.Router();
router.get('/:category_name',get_newspaper_by_category_name);
module.exports = router;
