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
  productId:{
    type:DataTypes.INTEGER
  },
  title:{
    type:DataTypes.STRING

  },
  image:{
    type:DataTypes.JSON

  },order:{
    type:DataTypes.INTEGER

  },
  order:{
    type:DataTypes.BOOLEAN, 
    defaultValue:true

  },
 
}, {
  tableName:"productgalleries",
  timestamps: true,
});
productModel.hasMany(productGalleriesModel,{foreignKey:"productId",as:"productGalleries"})
productModel.belongsTo(productModel,{foreignKey:"Id"})
export default productGalleriesModel;
