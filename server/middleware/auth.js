const {AUTHENTICATION_ERROR_STATUS, AUTHENTICATION_ERROR} = require("../constant/constant");
const {verify_cookie} = require("../service/auth_service");
exports.verify = async (request, response, next) => {
    const cookie = request.headers.authorization.split(' ')[1];
    if (!cookie) {
        response.status(AUTHENTICATION_ERROR_STATUS).json({
            message: AUTHENTICATION_ERROR,
            error: "Cookie is none!"
        })
    }
    const decoded = verify_cookie(cookie);
    if (decoded != request.body.userId) {
        response.status(AUTHENTICATION_ERROR_STATUS).json({
            message: AUTHENTICATION_ERROR,
            error: "Cookie invalid!"
        })
    }

    return next();
}