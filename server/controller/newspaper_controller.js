const { find_one } = require('../service/newspaper_service')

exports.get_newspapers =async (request,result) => {
  const category_name = request.params.nameCategory;
  const data = await find_one(category_name)
  result.json(data)
}
