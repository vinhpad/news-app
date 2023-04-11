const { find_by_category_name} = require('../service/newspaper_service')

exports.get_newspaper_by_category_name =async (request,result) => {
  const category_name = request.params.category_name;
  const data = await find_by_category_name(category_name)
  result.json(data)
}
