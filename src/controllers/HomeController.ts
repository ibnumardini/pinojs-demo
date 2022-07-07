import { Request, Response } from "express";
import { response } from "../utils";

interface IDtoIndex {
    name?: string;
}

const HomeController = {
    index: (req: Request, res: Response) => {
        const { name = "fulan" }: IDtoIndex = req.query;

        const resp = {
            results: {
                hello: "world",
                name,
            },
        };

        return response.success(res, resp);
    },
};

export default HomeController;
