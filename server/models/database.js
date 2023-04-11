const { Sequelize, DataTypes } = require('sequelize');
const { category_entity } = require('../entities/category_entity');
const { favourite_entity } = require('../entities/favourite_entity');
const { newspaper_entity } = require('../entities/newspaper_entity');
const { user_entity } = require('../entities/user_entity');
const db = {};

config_eviroment = {
  'port': 3307,
  'username': 'root',
  'password': 'padv@2003V',
  'database': 'aBao',
  'host': 'localhost',
  'dialect': 'mysql',
};

let sequelize = new Sequelize(
    config_eviroment.database,
    config_eviroment.username,
    config_eviroment.password,
    config_eviroment
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.log('Unable to connect to the database:', error);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

exports.category_entity = category_entity(sequelize, DataTypes);
exports.favourite_entity = favourite_entity(sequelize, DataTypes);
exports.newspaper_entity = newspaper_entity(sequelize, DataTypes);
exports.user_entity = user_entity(sequelize, DataTypes);
exports.db = db
