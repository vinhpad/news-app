const { create_user, validate_login, update_password, update_profile } = require('../service/user');

register = async (request, result) => {
  const { email, username, password } = request.body;
  const data = await create_user(email, username, password);
  result.json(data);
};

login = async (request, result) => {
  const { email, password } = request.body;
  const data = await validate_login(email, password);
  result.json(data);
};

change_password = async (request, result) => {
  const { idUser, passCurrent, passNew } = request.body;
  const data = await update_password(idUser, passCurrent, passNew);
  result.json(data);
};

update = async (request, result) => {
  const { username, password, profilePhotoPath, idUser } = request.body;
  const data = await update_profile(username, password, profilePhotoPath, idUser);
  result.json(data);
};


module.exports = {
  register,
  login,
  change_password,
  update,
};
