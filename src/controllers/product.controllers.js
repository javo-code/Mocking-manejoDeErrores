import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
const productService = new ProductService();
import { createResponse } from "../utils.js";

export default class ProductController extends Controllers {
  constructor() {
    super(productService);
  }

  async getProdById(req, res, next) {
    try {
      const { id } = req.params;
      const prod = await this.service.getProdById(id);
      if (!prod)
        createResponse(res, 404, { method: "create", error: "getById Failes" })
      else createResponse(res, 200, prod);
    } catch (error) {
      next(error.message);
    }
  };

  async createRandomProducts(req, res, next) {
    try {
      const { cant } = req.query;
      const response = await productService.createProductsMock(cant);
      res.status(200).json({ products: response })
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  async getMockProducts(req, res, next) {
      try {
        const response = await productService.getAll();
        res.json(response);
      } catch (error) {
        console.log(error)
      }
    }

}