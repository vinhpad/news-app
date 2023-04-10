const bcrypt = require('bcrypt');
const { create_user, validate_login } = require('../service/user');
const DEFAULTPROFILEPATH = 'https://firebasestorage.googleapis.com/v0/b/funmath-80422.appspot.com/o/defaultProfileImage.png?alt=media&token=790800d6-aac7-4359-a541-e73b3348e3cb';

register = async (request, result) => {
  const { email, username, password } = request.body;
  try {
    const data = await create_user(email,username,password)
    result.json(data)
  } catch (err) {
    console.log('Register ERROR:', err);
  }
};

login = async (request, result) => {
  const { email, password } = request.body;
  try {
    const data = await validate_login(email,password)
    result.json(data)
  } catch (err) {
    console.log('Login ERROR:', err)
  }
}

module.exports = {
  register,
  login
}
