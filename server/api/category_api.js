const express = require('express');
const router = express.Router();
const { get_categories } = require('../controller/category_controller');
router.get('/',get_categories);
module.exports = router;
