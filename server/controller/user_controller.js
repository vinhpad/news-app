const {create_user, validate_login, update_password, update_profile} = require('../service/user_service');
const {
    DEFAULT_ERROR_STATUS,
    DEFAULT_ERROR,
    DEFAULT_STATUS,
    AUTHENTICATION_ERROR_STATUS,
    AUTHENTICATION_ERROR
} = require("../constant/constant");

exports.register = async (request, response) => {
    try {
        const {email, username, password} = await request.body;
        const data = await create_user(email, username, password);
        response.status(DEFAULT_STATUS).json(data);
    } catch (error) {
        response.status(AUTHENTICATION_ERROR_STATUS).json({
            message: AUTHENTICATION_ERROR,
            error: error.message
        })
    }
};

exports.login = async (request, response) => {
    try {
        const {email, password} = request.body;
        const data = await validate_login(email, password);
        response.status(DEFAULT_STATUS).json(data);
    } catch (error) {
        response.status(AUTHENTICATION_ERROR_STATUS).json({
            message: AUTHENTICATION_ERROR,
            error: error.message
        })
    }
};

exports.change_password = async (request, response) => {
    try {
        const {idUser, passCurrent, passNew} = request.body;
        const data = await update_password(idUser, passCurrent, passNew);
        response.json(data);
    } catch (error) {
        response.status(DEFAULT_ERROR_STATUS).json({
            message: DEFAULT_ERROR,
            error: error.message
        })
    }
};

exports.update = async (request, response) => {
    try {
        const {username, password, profilePhotoPath, idUser} = request.body;
        const data = await update_profile(username, password, profilePhotoPath, idUser);
        response.json(data);
    } catch (error) {
        response.status(DEFAULT_ERROR_STATUS).json({
            message: DEFAULT_ERROR,
            error: error.message
        })
    }
};

