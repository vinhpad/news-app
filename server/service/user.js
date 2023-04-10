const bcrypt = require('bcrypt');
const { User } = require('../models/database');
const { json, raw } = require('express');
const DEFAULTPROFILEPATH = 'https://firebasestorage.googleapis.com/v0/b/funmath-80422.appspot.com/o/defaultProfileImage.png?alt=media&token=790800d6-aac7-4359-a541-e73b3348e3cb';

create_user = async (email, username, password) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  let data = null;
  if (user != null) {
    data = {
      error: 'Email exist!',
    }
    return data;
  }

  bcrypt.hash(password, 10).then(async (password_hash) => {
    await User.create({
      email: email,
      username: username,
      password: password_hash,
      profile_photo_path: DEFAULTPROFILEPATH,
    });
  });

  data = 'SUCCESS';
  return data;
};

validate_login = async (email, password )  => {
  const user = await User.findOne({
    where: { email: email },
  });
  if (user) {
     return bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        return  {error: 'Mật khẩu không chính xác'}
      }
      else {
         return  {
          username: user.username,
          email: user.email,
          idUser: user.idUser,
          profile_photo_path: user.profile_photo_path,
        }
      }
    });
  } else {
    return data = { error: 'Tài khoản chưa tồn tại' }
  }
};

module.exports = {
  create_user,
  validate_login
};