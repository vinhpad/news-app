const express = require('express');
const router = express.Router();
const { register ,login ,change_password,update} = require('../controller/user_controller')
const {verify} = require("../middleware/auth");

router.post('/',register)
router.post('/login',login)
router.patch('/changePass',verify,change_password)
router.patch('/update',verify,update)
module.exports = router
