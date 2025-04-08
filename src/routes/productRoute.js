import express from "express";
import { productController } from "../controller/productController.js";
// import router from "./route.js";

const productRouter = express.Router();

productRouter.post("/create", productController.createProduct);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.get("/product-by-slug/:slug",productController.getProductBySlug)
export default productRouter;
