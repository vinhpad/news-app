exports.user_entity = async (sequelize, DataTypes) => {
  const entity_obj = await sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false, 
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, 
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ava_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }
  );
  return entity_obj;
};