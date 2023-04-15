const { find_many } = require('../service/category_service')
const {DEFAULT_ERROR, DEFAULT_STATUS, DEFAULT_ERROR_STATUS} = require("../constant/constant");

exports.get_categories = async (request, response) => {
  try {
    const data = await find_many()
    return response.status(DEFAULT_STATUS).json(data);
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message : DEFAULT_ERROR,
      error: error.message
    })
  }
}