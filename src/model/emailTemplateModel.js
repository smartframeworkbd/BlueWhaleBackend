import { DataTypes } from 'sequelize';
import sequelize from './index.js';
// import sequelize from '../config/database'; // Adjust the path to your database configuration

const EmailTemplateModel = sequelize.define('EmailTemplate', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: 'Unique name for identifying the email template',
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Subject line of the email',
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: 'Body of the email with placeholders for dynamic content',
    },
    placeholders: {
        type: DataTypes.JSON,
        allowNull: true,
        comment: 'JSON object listing the dynamic placeholders used in the body',
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Indicates if the template is active or inactive',
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'The user or system that created the template',
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'The user or system that last updated the template',
    },
}, {
    tableName: 'EmailTemplates',
    timestamps: true,
    underscored: true,
});

export default EmailTemplateModel;
