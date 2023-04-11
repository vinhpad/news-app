exports.newspaper_entity = (sequelize, DataTypes) => {
    const entity_obj = sequelize.define(
        'Newspaper',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            content: {
                type: DataTypes.STRING(10000),
                allowNull: false,
            },
            writer: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            category_name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            date: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        }
    );
    return entity_obj;
};