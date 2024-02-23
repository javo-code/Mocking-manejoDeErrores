import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
const productService = new ProductService();

export default class ProductController extends Controllers {
  constructor() {
    super(productService);
  }

getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await this.service.getById(id);
        if (!item)
            return httpResponse.NotFound(res, "Item not found!");
        else
            return httpResponse.Ok(res, item);
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
      throw new Error(error.message)
    }
  }

  async getMockProducts(req, res, next) {
      try {
        const response = await productService.getAll();
        res.json(response);
      } catch (error) {
        throw new Error(error.message)
      }
    }

}