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
    type:DataTypes.INTEGER,
    allowNull: false, // Ensure productId is not null
    references: {
      model: productModel, // Reference the productModel
      key: 'Id', // The referenced key in the product model
    },
  },
  categoryId:{
    type:DataTypes.INTEGER,
    allowNull: false,

  }
 
}, {
  tableName:"productincategories",
  timestamps: true,
});
productModel.hasMany(productInCategory, { foreignKey: "productId", as: "productInCategory" });
productInCategory.belongsTo(productModel, { foreignKey: "Id" });


export default productInCategory;
