exports.favourite_entity = (sequelize, DataTypes) => {
    const entity_obj = sequelize.define(
        'Favourite',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true
            },
            id_newspaper: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }
    );
    return entity_obj;
};