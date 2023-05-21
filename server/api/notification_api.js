const express = require('express')
const { get_notification } = require('../controller/notification_controller');
const router = express.Router()
router.get('/',get_notification)
module.exports = router


