import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const contentModel = sequelize.define('content', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TitleBangla:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    slag: {  // Assuming 'slag' is meant to be 'slug'
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    subTitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    isMenu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    type: {
        type: DataTypes.ENUM('article', 'module'),
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    external_videoUrl: {  // Corrected typo "vedioUrl" to "videoUrl"
        type: DataTypes.STRING,
        allowNull: true,
    },
    buttonText: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    buttonLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    parent: {
        type: DataTypes.INTEGER,
        defaultValue: 0,  // 0 represents the root
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    meta_title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    meta_description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    meta_image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,  // Adds createdAt and updatedAt timestamps
});

export default contentModel;
