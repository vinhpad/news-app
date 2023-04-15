const express = require('express')
const {verify} = require("../middleware/auth");
const {create_favourite, delete_favourite} = require("../controller/favourite_controller");
const router = express.Router()
router.post('/',verify,create_favourite)
router.delete('/',verify,delete_favourite)
module.exports = router


