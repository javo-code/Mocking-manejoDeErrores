import { Router } from "express";
import ProdController from "../controllers/product.controllers.js";
import productValidator from "../middlewares/productValidator.js";

const router = Router();
const controller = new ProdController();

router
    .get("/", controller.getAll)
    .get("/:id", controller.getById)
    .post("/", productValidator, controller.create)
    .put("/:id", controller.update)
    .delete("/:id", controller.delete)
    .get("/dto/:id", controller.getProdById)
    .post("/mockingproducts", controller.createRandomProducts)


export default router;
