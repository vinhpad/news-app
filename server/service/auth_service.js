const jwt = require('jsonwebtoken')
const {PRIVATE_KEY_JWT, AVA_DEFAULT} = require("../constant/constant");
exports.create_cookie = async (data) => {
    return await jwt.sign(
        data,
        PRIVATE_KEY_JWT,
        {
            expiresIn: '1h'
        }
    )
}

exports.verify_cookie = async (cookie) => {
    const data = jwt.verify(cookie, PRIVATE_KEY_JWT)
    return data
}