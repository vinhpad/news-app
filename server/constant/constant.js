const DEFAULT_ERROR = "An error occurred!";
const DEFAULT_ERROR_STATUS = 400
const AUTHENTICATION_ERROR_STATUS = 401;
const AUTHENTICATION_ERROR = "Authentication error!"
const DEFAULT_STATUS = 200
const AVA_DEFAULT = "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"

const PRIVATE_KEY_JWT = process.env.PRIVATE_KEY_JWT
module.exports = {
    DEFAULT_ERROR,
    DEFAULT_ERROR_STATUS,
    AUTHENTICATION_ERROR_STATUS,
    DEFAULT_STATUS,
    AUTHENTICATION_ERROR,

    AVA_DEFAULT,
    PRIVATE_KEY_JWT
}

