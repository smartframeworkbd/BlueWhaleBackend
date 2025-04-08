import { DataTypes } from 'sequelize';
import sequelize from "./index.js"; // Adjust the path to your sequelize instance

const headerModel = sequelize.define('Header', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true, // URL to the header logo if applicable
    },
    navLinks: {
        type: DataTypes.JSON,
        allowNull: true, // JSON format for navigation links (e.g., { "home": "/home", "about": "/about" })
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
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Sets the default value to true
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
    tableName: 'header', 
    timestamps: true, 
});

export default headerModel;
