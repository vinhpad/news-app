const {newspaper_entity} = require('../prisma/database');

exports.find_one = async (name_category) => {
    const data = await newspaper_entity.findMany({
        where: {
            nameCategory: name_category
        }
    })
    return data
}
