exports.category_entity = (sequelize, DataTypes) => {
    const entity_obj = sequelize.define(
        'Category',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            category_name: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            }
        }
    );
    return entity_obj;
};
