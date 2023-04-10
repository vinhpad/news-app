const express = require('express');
const router = express.Router();
const { register ,login } = require('../controller/user')

router.get('/', async (req, res) => {
  res.json('SUCCESS');
});
router.post('/',register)
router.post('/login',login)


/*
router.patch('/changePass', async (req, res) => {
  const { idUser, passCurrent, passNew } = req.body;
  const user = await User.findByPk(idUser);
  if (user) {
    bcrypt.compare(passCurrent, user.password).then((match) => {
      if (!match) res.json({ error: 'Mật khẩu không chính xác' });
      else {
        bcrypt.hash(passNew, 10).then((hash) => {
          User.update(
            {
              password: hash,
            },
            {
              where: { idUser: idUser },
            }
          );
        });
        res.json('SUCCESS');
      }
    });
  } else {
    res.json({ error: 'Tài khoản chưa tồn tại' });
  }
});

router.patch('/update', async (req, res) => {
  const { username, password, profilePhotoPath, idUser } = req.body;
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
  User.update(updateQuery, { where: { idUser: idUser } });
  res.json('SUCCESS');
});
*/
module.exports = router
