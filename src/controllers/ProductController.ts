import { Request, Response } from "express";
import { response, logger } from "../utils";
import { database } from "../config";

const ProductController = {
    index: async (req: Request, res: Response) => {
        const allProducts = await database.product.findMany();

        return response.success(res, { results: allProducts });
    },
    findOne: async (req: Request, res: Response) => {
        const { id } = req.params;

        const allProducts = await database.product.findFirst({
            where: { id: parseInt(id) },
        });

        return response.success(res, { results: allProducts });
    },
    create: async (req: Request, res: Response) => {
        const { name, price } = req.body;

        const newProduct = await database.product.create({
            data: {
                productName: name,
                price,
            },
        });

        return response.success(res, { results: newProduct });
    },
    update: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, price } = req.body;

        const product = await database.product.update({
            where: { id: parseInt(id) },
            data: {
                productName: name,
                price,
            },
        });

        return response.success(res, { results: product });
    },
    delete: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const product = await database.product.delete({
                where: { id: parseInt(id) },
            });

            return response.success(res, { results: product });
        } catch (error) {
            logger.error(error);

            return response.success(res, {});
        }
    },
};

export default ProductController;
