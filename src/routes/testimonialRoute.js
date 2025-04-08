import express from "express";
import { testimonialController } from "../controller/testimonialController.js";
const testimonialRoute = express.Router()


testimonialRoute.post("/create",testimonialController.createTestimonial)
testimonialRoute.get("/",testimonialController.getTestimonials)
testimonialRoute.get("/:id",testimonialController.getTestimonialById)

export default testimonialRoute