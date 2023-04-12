const { category_entity } = require('../prisma/database');

exports.find_many = async () => {
  const data = await category_entity.findMany();
  return data;
};

