
const { DEFAULT_STATUS, DEFAULT_ERROR_STATUS, DEFAULT_ERROR } = require('../constant/constant');
const { find_one } = require('../service/notification_service');

exports.get_notification = async(request,response) => {
  try {
    const data = await find_one()
    response.status(DEFAULT_STATUS).json(data)
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error : error.message
    })
  }
}