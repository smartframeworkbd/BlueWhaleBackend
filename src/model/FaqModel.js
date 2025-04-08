import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const FaqModel = sequelize.define('faqs', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  questionEnglish: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questionBangla: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answerEnglish: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  answerBangla: {
    type: DataTypes.TEXT,
    allowNull: false,
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

export default FaqModel;
