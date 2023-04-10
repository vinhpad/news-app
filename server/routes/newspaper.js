const express = require('express')
const { find_by_name_category } = require('../controller/newspaper')
const router = express.Router();
router.get('/:nameCategory',find_by_name_category);
module.exports = router;
