const { find_one } = require('../service/newspaper_service')
const {response} = require("express");
const {DEFAULT_ERROR, DEFAULT_STATUS, DEFAULT_ERROR_STATUS} = require("../constant/constant");

exports.get_newspapers =async (request,response) => {
  try {
    const category_name = request.params.nameCategory;
    const data = await find_one(category_name)
    response.status(DEFAULT_STATUS).json(data)
  } catch (error) {
    response.status(DEFAULT_ERROR_STATUS).json({
      message: DEFAULT_ERROR,
      error : error.message
    })
  }
}
