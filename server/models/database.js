const { Sequelize, DataTypes } = require('sequelize');
const { category_entity } = require('./entities/Category');
const { favourite_entity } = require('./entities/Favourite');
const { newspaper_entity } = require('./entities/Newspaper');
const { user_entity } = require('./entities/User');
const db = {};

config = {
  'port': 3307,
  'username': 'root',
  'password': 'padv@2003V',
  'database': 'aBao',
  'host': 'localhost',
  'dialect': 'mysql',
};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.log('Unable to connect to the database:', error);
});

const Category = category_entity(sequelize, DataTypes);
const Favourite = favourite_entity(sequelize, DataTypes);
const Newspaper = newspaper_entity(sequelize, DataTypes);
const User = user_entity(sequelize, DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {
  db,
  Category,
  Favourite,
  Newspaper,
  User
};
