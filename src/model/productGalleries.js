import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import productModel from "./productModel.js";

const productGalleriesModel = sequelize.define('productGalleries', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false, // Make sure productId is required
    references: {
      model: productModel, // Reference the productModel
      key: 'Id', // The referenced key in the product model
    },
  },
  title: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.JSON,
  },
  orderNumber: {  // Renamed to avoid conflict
    type: DataTypes.INTEGER,
  },
  isActive: {  // Renamed to clarify its meaning
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: "productgalleries",
  timestamps: true,
});

// Correct associations
productModel.hasMany(productGalleriesModel, { foreignKey: "productId", as: "productGalleries" });
productGalleriesModel.belongsTo(productModel, { foreignKey: "productId" }); // Corrected the belongsTo relationship

export default productGalleriesModel;
