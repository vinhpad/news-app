const { find_unique_id } = require('./user_service');
const { favourite_entity, prisma } = require('../prisma/database');

exports.create = async (idUser, idNewspaper) => {
  const data = await favourite_entity.create({
    where: {
      idUser: idUser,
      idNewspaper: idNewspaper,
    },
  });
  return data;
};

exports.remove = async (idUser, idNewspaper) => {
  const data = await favourite_entity.delete({
    where: {
      idUser: idUser,
      idNewspaper: idNewspaper,
    },
  });
  return data;
};


exports.find_unique = async (idUser, idNewspaper) => {
  const data = await favourite_entity.findUnique({
    where: {
      idUser: idUser,
      idNewspaper: idNewspaper,
    },
  });
  return data;
};

exports.is_existed = async (idUser, idNewspaper) => {
  const favourite = await this.find_unique(idUser, idNewspaper);
  if (favourite) {
    return {
      favourite: true,
    };
  }
  return {
    favourite: false,
  };
};

exports.execute_raw = async (sql) => {
  try {
    const data = await prisma.$executeRaw(sql);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

exports.execute_raw_get_newspaper_favourite_by_category = async (idUser, nameCategory) => {
  const sql = `select * form favourite inner join newspaper on favourite.idNewspaper = newspaper.idNewspaper where favourite.idUser = ${idUser} and newspaper.nameCategory = ${nameCategory}`;
  const data = await this.execute_raw(sql);
  return data;
};

exports.execute_raw_get_newspapers = async (idUser) => {
  const sql = `select * form favourite inner join newspaper on favourite.idNewspaper = newspaper.idNewspaper where favourite.idUser = ${idUser}`;
  const data = await this.execute_raw(sql);
  return data;
};

exports.execute_raw_get_category = async (idUser) => {
  const sql = `select newspaper.nameCategory form favourite inner join newspaper on favourite.idNewspaper = newspaper.idNewspaper where favourite.idUser = ${idUser} group by newspaper.nameCategory`;
  const data = await this.execute_raw(sql);
  return data;
};
