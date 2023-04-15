const {user_entity} = require("../prisma/database")
const {hash_string, compare} = require("./bcypt_service")
const {AVA_DEFAULT} = require("../constant/constant")
const {create_cookie} = require("./auth_service")

exports.find_unique_email = async (email) => {
    const data = await user_entity.findUnique({
        where: {
            email: email
        }
    })
    return data
}

exports.find_unique_id = async (idUser) => {
    const data = await user_entity.findUnique({
        where: {
            idUser: idUser
        }
    })
    return data
}

exports.create_user = async (email, username, password) => {
    const user = await this.find_unique_email(email)
    if (user) {
        throw new Error('Email exist!')
    }
    const password_hash = await hash_string(password, 10)
    const new_user = {
        email: email,
        username: username,
        password: password_hash,
        profile_photo_path: AVA_DEFAULT
    }
    const data = await user_entity.create({
        data: new_user
    })

    return data;
}

exports.validate_login = async (email, password) => {
    const user = await this.find_unique_email(email)
    if (!user) {
        throw new Error('Email not exist!')
    }

    const is_match = await compare(password, user.password)
    if (!is_match) {
        throw new Error('Password not correct!')
    }

    const data = {
        idUser: user.idUser,
        username: user.username,
        email: user.email,
        profile_photo_path: user.profile_photo_path
    }

    const cookie = await create_cookie(data)
    return data
}

exports.update_password = async (idUser, current_password, new_password) => {
    const user = await this.find_unique_id(idUser);
    if (!user) {
        throw new Error("User not exist!")
    }
    const is_match = await compare(current_password, user.password)
    if (!is_match) {
        throw new Error("Password not correct!")
    }

    const new_password_hash = await hash_string(new_password, 10)
    const data = await user_entity.update({
        where: {
            idUser: idUser,
        },
        data: {
            password: new_password_hash
        }
    })
    return "Change password successfully!";
}

exports.update_profile = async (username, password, ava_url, id) => {
    const update_user = {};

    if (password) {
        update_user['password'] = await hash_string(password, 10);
    }

    if (username) {
        update_user['username'] = username;
    }

    if (ava_url) {
        update_user['avaUrl'] = ava_url;
    }
    await user_entity.update({
        where: {
            idUser: id
        },
        update_user
    });
    return 'Update profile successfully!';
};
