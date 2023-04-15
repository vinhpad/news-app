const {create, remove} = require("../service/favourite_service");
const {DEFAULT_STATUS, DEFAULT_ERROR_STATUS, DEFAULT_ERROR} = require("../constant/constant");


exports.create_favourite = async (request, response) => {
    try {
        const {idUser, idNewspaper} = request.body;
        const data = await create(idUser, idNewspaper)
        response.status(DEFAULT_STATUS).json(data)
    } catch (error) {
        response.status(DEFAULT_ERROR_STATUS).json({
            message: DEFAULT_ERROR,
            error: error.message
        })
    }
}

exports.delete_favourite = async (request, response) => {
    try {
        const {favouriteId} = request.body;
        const data = await remove(favouriteId);
        response.status(DEFAULT_STATUS).json(data)
    } catch (error) {
        response.status(DEFAULT_ERROR_STATUS).json({
            message : DEFAULT_ERROR,
            error : error.message
        })
    }
}