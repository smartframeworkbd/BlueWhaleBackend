import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import bcrypt from 'bcrypt'
const adminModel = sequelize.define('admins', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  adminFullName: {
    type: DataTypes.STRING,
  },
  adminEmail: {
    type: DataTypes.STRING,
    unique: true,
  },
  adminPhone: {
    type: DataTypes.STRING,
  },
  adminPassword: {
    type: DataTypes.STRING,
  },
  adminRole: {
    type: DataTypes.STRING,
  },

  adminPermissions: {
    type: DataTypes.JSON, // Store permissions as an array of modules
    allowNull: true,
    defaultValue: [] // Example: ['content', 'hotspot']
  },
  adminStatus: {
    type: DataTypes.ENUM('inactive', 'active', 'blocked'), // Enum for predefined statuses
    allowNull: false,
    defaultValue: 'active', // Optional default value
  },
}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (admin) => {
      admin.adminPassword = await bcrypt.hash(admin.adminPassword, 10)
    }
  }
});


adminModel.prototype.isPasswordValid = async function (password) {
  return await bcrypt.compare(password, this.adminPassword);
};

export default adminModel;
