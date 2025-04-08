
import express from 'express';
import { productCategoryController } from '../controller/productCategoryController.js';

const productCategoryRouter = express.Router();
productCategoryRouter.post("/create",productCategoryController.createProductCategory)
productCategoryRouter.get("/", productCategoryController.getAllProductCategories);
productCategoryRouter.get("/:id", productCategoryController.getProductCategoryById);
productCategoryRouter.put("/:id", productCategoryController.updateProductCategory);
productCategoryRouter.delete("/:id", productCategoryController.deleteProductCategory)

export default productCategoryRouter
