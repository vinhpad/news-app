const {user_entity} = require("../models/database");
const {hash_string, compare} = require("./bcypt_service");
const DEFAULT_AVA_URL = "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"

exports.find_by_email = async (email) => {
    const data = await user_entity.findOne({
        where: {
            email: email
        }
    })
    return data
}

exports.find_by_id = async (id_user) => {
    const data = await user_entity.findOne({
        where: {
            id: id_user
        }
    })
    return data
}

exports.create_user = async (email, username, password) => {
    const user = await this.find_by_email(email)
    if (user) {
        return {
            error: 'Email exist!',
        }
    }
    const password_hash = await hash_string(password, 10)
    await user_entity.create({
        email: email,
        username: username,
        password: password_hash,
        ava_url: DEFAULT_AVA_URL,
    });
    return 'Create user successfully!';
};

exports.validate_login = async (email, password) => {
    const user = await this.find_by_email(email)
    if (!user) {
        return {
            error: 'Account not exist!'
        };
    }

    const is_match = await compare(password, user_entity.password)
    if (!is_match) {
        return {
            error: 'Password not correct!'
        }
    }

    return {
        username: user.username,
        email: user.email,
        idUser: user.idUser,
        profile_photo_path: user.profile_photo_path,
    };
};

exports.update_password = async (id, current_password, new_password) => {
    const user = await this.find_by_id(id);

    if (!user) {
        return {
            error: 'Account not exist!'
        }
    }

    const is_match = await compare(current_password, new_password)

    if (!is_match) {
        return {
            error: 'Password not correct!'
        }
    }

    const new_password_hash = hash_string(new_password, 10)
    await user_entity.update(
        {
            password: new_password_hash
        },
        {
            where: {
                id: id
            }
        })
    return 'Update password successfully!'
};

exports.update_profile = async (username, password, ava_url, id) => {
    const query_builder_obj = {};

    if (password) {
        const password_hash = await hash_string(password, 10)
        query_builder_obj['password'] = password_hash;
    }

    if (username) {
        query_builder_obj['username'] = username;
    }

    if (ava_url) {
        query_builder_obj['ava_url'] = ava_url;
    }
    await user_entity.update(query_builder_obj, {
        where: {
            id: id
        }
    });
    return 'Update profile successfully!';
};
