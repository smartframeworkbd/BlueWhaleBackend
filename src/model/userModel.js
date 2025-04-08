import { DataTypes } from 'sequelize';
import sequelize from './index.js';
const userModel = sequelize.define('users', {

  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING(150),
    allowNull: false,
    // unique: true,
    validate: {
      len: [1, 150]
    }
  },
  userEmail: {
    type: DataTypes.STRING(150),
    allowNull: false,
    // unique: true,
    validate: {
      isEmail: true,
      len: [1, 150]
    }
  },
  userPhone: {
    type: DataTypes.STRING(150),
    unique:true,
    validate: {
      is: /^[0-9\-\+\(\) ]+$/i
    }
  },
  refreshToken:{
    type:DataTypes.STRING
  },
  passCode:{
    type:DataTypes.STRING(150),
  },
  DateOfBirth: {
    type: DataTypes.STRING(150),
  },
  gender: {
    type: DataTypes.STRING(150),
  },
  profession: {
    type: DataTypes.STRING(150),
  },
  educationQualification: {
    type: DataTypes.STRING(150),
  },
  country: {
    type: DataTypes.STRING(150),
  },
  nationality: {
    type: DataTypes.STRING(150),
  },
  address: {
    type: DataTypes.STRING(150),
  },
  nid: {
    type: DataTypes.STRING(150), // Assuming nid is a string
    allowNull: true,
    unique: true, // NID should be unique
    validate: {
      len: [1, 150] // You can adjust the length validation as per your requirements
    }
  },
  bid: {
    type: DataTypes.STRING(150), // Assuming bid is a string
    allowNull: true,
    unique: true, // BID should be unique
    validate: {
      len: [1, 150] // Adjust as necessary
    }
  },
  status:{
    type:DataTypes.BOOLEAN,
    defaultValue:true
  },
  passport: {
    type: DataTypes.STRING(150), 
    allowNull: true,
    unique: true, 
    validate: {
      len: [1, 150] // Adjust length validation as per passport number format
    }
  }

}, {
  timestamps: true,
});
// userModel.hasMany(grievanceModel, { foreignKey: 'userId' });

export default userModel;
