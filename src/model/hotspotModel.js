import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const hotspotModel = sequelize.define('hotspots', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    hotspotSectionName: {
        type: DataTypes.ENUM('sectionOne', 'sectionTwo'),
        allowNull: false,
    },
    hotspotIcon:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    hotspotNameEnglish: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hotspotNameBangla: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hotspotDetailsEnglish: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    hotspotButtonTextBangla: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    hotspotButtonTextEnglish: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hotspotDetailsBangla: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hotspotType: {
        type: DataTypes.ENUM('link', 'model', 'file'),
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    file: {
        type: DataTypes.JSON
    },
    content: {
        type: DataTypes.JSON, // Store as JSON for complex structures
        allowNull: true,
    },

    moduleName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    moduleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: true,
});

export default hotspotModel;
