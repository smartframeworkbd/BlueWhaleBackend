import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import slugify from "slugify";

const productModel = sequelize.define("product", {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    productTitle:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    productSubTitle:{
        type: DataTypes.STRING,
        allowNull: true,


    },
    productDescription:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    productIsFeatured:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    productImage:{
        type:DataTypes.JSON,
        allowNull:true
    },
    productVideo:{
        type:DataTypes.JSON,
        allowNull:true
    }
    ,productSlug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    productTags:{
        type:DataTypes.JSON
    },
    productPrice:{
        type:DataTypes.INTEGER,
        allowNull:true

    },
    productPriceIsDisplayed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    productStock:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
   productStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
   productOrder:{
    type:DataTypes.INTEGER,
    allowNull:true
   }
}, {
    timestamps: true,
  
});

export default productModel;
