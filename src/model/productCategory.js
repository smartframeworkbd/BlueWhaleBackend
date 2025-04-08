import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import slugify from "slugify";

const productCategoryModel = sequelize.define("productCategory", {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    categorySlug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    categoryStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    parentId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    tableName:"productcategories",
    timestamps: true,
    hooks: {
        beforeValidate: async (category) => {  
            if (category.categoryName && !category.categorySlug) { 
                category.categorySlug = slugify(category.categoryName, {
                    lower: true,
                    strict: true,
                });
            }
        }
    }
});

export default productCategoryModel;
