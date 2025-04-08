import { DataTypes } from 'sequelize';
// import sequelize from '../config/database'; // Adjust the path to your sequelize instance
import sequelize from "./index.js";

const footerModel = sequelize.define('Footer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        // defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true, // URL to the footer logo if applicable
    },
    aboutTextEnglish: {
        type: DataTypes.TEXT,
        allowNull: true, // Text to display as "About" in the footer
    },
    aboutTextBangla: {
        type: DataTypes.TEXT,
        allowNull: true, // Text to display as "About" in the footer
    },
    contactEmail: {
        type: DataTypes.STRING,
        allowNull: true, // Contact email address
        validate: {
            isEmail: true
        }
    },
    contactPhone: {
        type: DataTypes.STRING,
        allowNull: true, // Contact phone number
    },
    addressEnglish: {
        type: DataTypes.STRING,
        allowNull: true, // Physical address
    },
    addressBangla: {
        type: DataTypes.STRING,
        allowNull: true, // Physical address
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Sets the default value to true
    },
    socialMediaLinks: {
        type: DataTypes.JSON,
        allowNull: true, // JSON format for social media links (e.g., { "facebook": "url", "twitter": "url" })
    },
    quickLinks: {
        type: DataTypes.JSON,
        allowNull: true, // JSON format for quick navigation links (e.g., { "home": "url", "contact": "url" })
    },
    copyrightTextBangla: {
        type: DataTypes.STRING,
        allowNull: true // Text for copyright notice
    },
    copyrightTextEnglish: {
        type: DataTypes.STRING,
        allowNull: true // Text for copyright notice
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
    tableName: 'footer',
    timestamps: true,
});

export default footerModel;
