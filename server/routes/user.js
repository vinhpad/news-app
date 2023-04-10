const express = require('express');
const router = express.Router();
const { register ,login ,change_password,update} = require('../controller/user')

router.get('/', async (req, res) => {
  res.json('SUCCESS');
});
router.post('/',register)
router.post('/login',login)
router.patch('/changePass',change_password)
router.patch('/update',update)
module.exports = router
