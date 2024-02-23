import { Router } from "express";
import ProductController from "../controllers/product.controllers.js";
import productValidator from "../middlewares/productValidator.js";

const router = Router();
const controller = new ProductController();

router
    .get("/", controller.getAll)
    .get("/:id", controller.getById)
    .post("/", productValidator, controller.create)
    .put("/:id", controller.update)
    .delete("/:id", controller.delete)
    .get("/dto/:id", controller.getById)
    .post("/mockingproducts", controller.createRandomProducts)


export default router;
