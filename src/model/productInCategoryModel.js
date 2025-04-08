import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import productModel from "./productModel.js";

const productInCategory = sequelize.define('productInCategory', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  productId:{
    type:DataTypes.INTEGER
  },
  categoryId:{
    type:DataTypes.INTEGER

  }
 
}, {
  tableName:"productincategories",
  timestamps: true,
});
productModel.hasMany(productInCategory,{foreignKey:"productId",as:"productInCategory"})
productInCategory.belongsTo(productModel,{foreignKey:"Id"})
export default productInCategory;
