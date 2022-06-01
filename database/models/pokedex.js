const { SQLContext } = require('rey-common');
const { Model, DataTypes } = SQLContext.getORMProvider();

class Pokedex extends Model {}

Pokedex.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        types: {
            type: DataTypes.ARRAY(DataTypes.STRING(255)),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        abilities: {
            type: DataTypes.ARRAY(DataTypes.STRING(255)),
            allowNull: false
        },
        weaknesses: {
            type: DataTypes.ARRAY(DataTypes.STRING(255)),
            allowNull: false
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        special_attack: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        special_defense: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        evolutions: {
            type: DataTypes.ARRAY(DataTypes.STRING(255)),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        sequelize: SQLContext.getContext(),
        underscored: true,
        paranoid: true,
        tableName: 'pokedex'
    }
);

module.exports = Pokedex;
