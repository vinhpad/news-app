category_entity = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        'Category',
        {
            idCategory: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            nameCategory: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            }
        },
        {
            timestamps: false,
        }
    );
    return Category;
};

module.exports = {
  category_entity
}
