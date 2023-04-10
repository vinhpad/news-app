const { find_all } = require('../service/newspaper')

const find_by_name_category =async (request,result) => {
  const nameCategory = request.params.nameCategory;
  const data = await find_all(nameCategory)
  result.json(data)
}

module.exports = {
  find_by_name_category
}