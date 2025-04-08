// import productGalleries from "../model/productGalleries.js";
import productGalleriesModel from "../model/productGalleries.js";
import productInCategory from "../model/productInCategoryModel.js";
import productModel from "../model/productModel.js";
import slugify from "slugify";

const createProduct = async (postBody) => {
    if (postBody.productTitle && !postBody.productSlug) {
        postBody.productSlug = slugify(postBody.productTitle, { lower: true, strict: true });
    }

    let productGalaries = postBody.productGalaries;
    let productCategories = postBody.productCategories;

    // Creating the product
    let product = await productModel.create(postBody);

    // Checking if galleries exist, and creating them
    if (productGalaries.length > 0) {
        const galleryPromises = productGalaries.map(async (data) => {
            await productGalleriesModel.create({ ...data, productId: product.Id });
        });
        // Waiting for all gallery creation promises to resolve
        await Promise.all(galleryPromises);
    }

    // Handling product categories (assuming `productCategories` is an array)
    if (productCategories.length > 0) {
        const categoryPromises = productCategories.map(async (categoryId) => {
            await productInCategory.create({ productId: product.Id, categoryId });
        });
        // Waiting for all category associations to resolve
        await Promise.all(categoryPromises);
    }

    // Returning the created product
    return product;
};

const getAllProducts = async () => {
    return await productModel.findAll({
        include: [
            { model: productGalleriesModel, as: 'productGalleries' },  // Include galleries associated with the product
            { model: productInCategory, as: 'productInCategory' },  // Include categories associated with the product
          ],
    });
};

const getProductById = async (id) => {
    return await productModel.findByPk(id);
};

const getProductBySlug=async(slug)=>{
    return await productModel.findOne({
        where: {
            productSlug: slug
        },
        include: [
            { model: productGalleriesModel, as: 'productGalleries' },  // Include galleries associated with the product
            { model: productInCategory, as: 'productInCategory' },  // Include categories associated with the product
          ],

    });
}

const updateProduct = async (id, updateData) => {
    if (updateData.productTitle) {
        updateData.productSlug = slugify(updateData.productTitle, { lower: true, strict: true });
    }
    const product = await productModel.findByPk(id);
    if (!product) return null;
    return await product.update(updateData);
};

const deleteProduct = async (id) => {
    const product = await productModel.findByPk(id);
    if (!product) return null;
    await product.destroy();
    return true;
};

export const productService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductBySlug
};
