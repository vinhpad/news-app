const { Newspaper } = require('../models/database');

const find_all = async (nameCategory)=>{
  const data = await Newspaper.findAll({
    where: {
      nameCategory: nameCategory
    }
  })
  return data
}

module.exports = {
  find_all
}