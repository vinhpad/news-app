const express = require('express')
const {verify} = require("../middleware/auth");
const {create_favourite, delete_favourite, is_favourite, get_newspapers, get_newspapers_by_category,
  get_newspapers_favourite, get_category_favourite
} = require("../controller/favourite_controller");
const { get_categories } = require('../controller/category_controller');
const router = express.Router()
router.post('/',verify,create_favourite)
router.delete('/',verify,delete_favourite)
router.get('/',verify,is_favourite)
router.get('/newspaper',verify,get_newspapers_by_category)
router.get('/:idUser',verify,get_newspapers_favourite)
router.get('/category/:idUser',verify,get_category_favourite)
module.exports = router


