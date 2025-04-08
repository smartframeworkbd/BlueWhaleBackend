import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const welcomeSectionModel = sequelize.define('welcome_section', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    detailsEnglish: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    detailsBangla: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    buttonNameBangla: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    buttonNameEnglish: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    detailsLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
    order: {
        type: DataTypes.INTEGER,
    },

}, {
    timestamps: true,
});

export default welcomeSectionModel;
