const {newspaper_entity} = require('../models/database');

exports.find_by_category_name = async (name_category) => {
    const data = await newspaper_entity.findAll({
        where: {
            category_name: name_category
        }
    })
    return data
}
