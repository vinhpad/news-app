const {find_unique_id} = require("./user_service");
const {favourite_entity} = require("../prisma/database");

exports.create = async (userId, newspaperId) => {
    const data = await favourite_entity.create({
        data: {
            userId: userId,
            newspaperId: newspaperId
        }
    })
    return data
}

exports.remove = async (favouriteId) => {
    const data = await favourite_entity.delete({
        where:{
            favouriteId : favouriteId
        }
    })
    return data
}