import express from "express";
import multer from "multer";
import { getImage, imageUpload } from "../controller/assetsController.js";

const imageRoute = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

imageRoute.post("/", upload.any(), imageUpload);

imageRoute.get("/*/:imagename",getImage)

export default imageRoute;
