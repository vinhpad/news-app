const bcrypt = require('bcrypt');
const { User } = require('../models/database');
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
    };
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

validate_login = async (email, password) => {
  const user = await User.findOne({
    where: { email: email },
  });
  if (user) {
    return bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        return { error: 'Mật khẩu không chính xác' };
      } else {
        return {
          username: user.username,
          email: user.email,
          idUser: user.idUser,
          profile_photo_path: user.profile_photo_path,
        };
      }
    });
  } else {
    return data = { error: 'Tài khoản chưa tồn tại' };
  }
};

update_password = async (idUser, passCurrent, passNew) => {
  const user = await User.findByPk(idUser);

  if (user) {
    const data = await bcrypt.compare(passCurrent, user.password).then(async (match) => {
      console.log(user)
      if (!match) {
        return { error: 'Mật khẩu không chính xác' };
      } else {
        bcrypt.hash(passNew, 10).then(async (hash) => {
          await User.update(
            {
              password: hash,
            },
            {
              where: { idUser: idUser },
            },
          );
          return 'SUCCESS';
        });
        return 'SUCCESS'
      }
    });
    return data;
  }
  return { error: 'Tài khoản chưa tồn tại' };
};

update_profile = async (username, password, profilePhotoPath, idUser) => {
  const updateQuery = {};
  if (password) {
    await bcrypt.hash(password, 10).then((hash) => {
      updateQuery['password'] = hash;
    });
  }
  if (username) {
    updateQuery['username'] = username;
  }
  if (profilePhotoPath) {
    updateQuery['profile_photo_path'] = profilePhotoPath;
  }
  await User.update(updateQuery, { where: { idUser: idUser } });
  return 'SUCCESS';
};


module.exports = {
  create_user,
  validate_login,
  update_password,
  update_profile,
};