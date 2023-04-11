const { category_entity } = require('../models/database');

exports.find_all = async () => {
  const data = await category_entity.findAll();
  return data;
};

