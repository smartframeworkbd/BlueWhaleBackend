import { DataTypes } from 'sequelize';
import sequelize from "./index.js";

const bannerModel = sequelize.define('Banners', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortDescription: {
        type: DataTypes.STRING
    },
    button: {
        type: DataTypes.ARRAY(DataTypes.JSON),    },
    order: {
        type: DataTypes.INTEGER
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'banners',
    timestamps: true,
});

export default bannerModel;
