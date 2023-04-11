const express = require('express');
const router = express.Router();
const { register ,login ,change_password,update} = require('../controller/user_controller')

router.post('/',register)
router.post('/login',login)
router.patch('/changePass',change_password)
router.patch('/update',update)
module.exports = router
