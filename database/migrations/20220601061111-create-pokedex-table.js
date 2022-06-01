const tableOptions = {
    tableName: 'pokedex'
};

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable(tableOptions, {
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
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable(tableOptions);
    }
};
