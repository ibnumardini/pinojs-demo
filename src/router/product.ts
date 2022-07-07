import { Router } from "express";
import { ProductController as Product } from "../controllers";

const productRouter = Router();

productRouter.get("/", Product.index);
productRouter.get("/:id", Product.findOne);
productRouter.post("/", Product.create);
productRouter.put("/:id", Product.update);
productRouter.delete("/:id", Product.delete);

export default productRouter;
