const { find_all } = require('../service/category_service')

exports.get_categories = async (request, result) => {
  const data = await find_all()
  return result.json(data);
}