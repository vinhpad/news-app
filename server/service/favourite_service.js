const { find_unique_id } = require('./user_service');
const { favourite_entity, prisma } = require('../prisma/database');

exports.create = async (idUser, idNewspaper) => {
  const existed = await this.is_existed(idUser,idNewspaper)
  if(existed.favourite == true) {
    return null;
  }
  const data = await favourite_entity.create({
    data: {
      idUser: idUser,
      idNewspaper: idNewspaper,
    },
  });
  return data;
};

exports.remove = async (idUser, idNewspaper) => {
  const data = await favourite_entity.delete({
    where: {
      idUser_idNewspaper : {
        idUser: idUser,
        idNewspaper: idNewspaper,
      }
    },
  });
  return data;
};


exports.find_unique = async (idUser, idNewspaper) => {
  const data = await favourite_entity.findUnique({
    where: {
      idUser_idNewspaper : {
        idUser: idUser,
        idNewspaper: idNewspaper,
      }
    },
  });
  return data;
};

exports.is_existed = async ( idUser, idNewspaper) => {
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



exports.execute_raw_get_newspaper_favourite_by_category = async (idUser, nameCategory) => {
  console.log(idUser,nameCategory," _1")
  const data = await prisma.$queryRaw`select * from aBao.favourite inner join aBao.newspaper on aBao.favourite.idNewspaper = aBao.newspaper.idNewspaper where aBao.favourite.idUser = ${idUser} and aBao.newspaper.nameCategory = ${nameCategory};`;
  return data;
};

exports.execute_raw_get_newspapers = async (idUser) => {
  console.log(idUser," _2")
  const data =await prisma.$queryRaw`select * from aBao.favourite inner join aBao.newspaper on aBao.favourite.idNewspaper = aBao.newspaper.idNewspaper where aBao.favourite.idUser = ${idUser};`;
  return data;
};

exports.execute_raw_get_category = async (idUser) => {
  console.log(idUser," _3")
  const data = await prisma.$queryRaw`select aBao.newspaper.nameCategory from aBao.favourite inner join aBao.newspaper on aBao.favourite.idNewspaper = aBao.newspaper.idNewspaper where aBao.favourite.idUser = ${idUser} group by nameCategory;`;
  console.log(data)
  return data;
};
