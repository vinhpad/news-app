const { Category } = require('../models/database');

find_all = async () => {
  const data = await Category.findAll();
  return data;
};
module.exports = {
  find_all
};