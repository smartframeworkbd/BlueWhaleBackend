import productCategoryModel from "../model/productCategory.js";

const createProductCategory = async (postBody) => {
    return await productCategoryModel.create(postBody);
};

const getAllProductCategories = async () => {
    return await productCategoryModel.findAll();
};

const getProductCategoryById = async (id) => {
    return await productCategoryModel.findByPk(id);
};

const updateProductCategory = async (id, updateBody) => {
    await productCategoryModel.update(updateBody, { where: { id } });
    return await productCategoryModel.findByPk(id);
};

const deleteProductCategory = async (id) => {
    return await productCategoryModel.destroy({ where: { id } });
};

export const productCategoryService = {
    createProductCategory,
    getAllProductCategories,
    getProductCategoryById,
    updateProductCategory,
    deleteProductCategory,
};
