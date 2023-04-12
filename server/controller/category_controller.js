const { find_many } = require('../service/category_service')

exports.get_categories = async (request, result) => {
  const data = await find_many()
  return result.json(data);
}