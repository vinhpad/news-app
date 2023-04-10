const { find_all } = require('../service/category')
const get_detail = async (request, result) => {
  const data = await find_all()
  return result.json(data);
}

module.exports = {
  get_detail
}