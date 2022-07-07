import { Application, Request, Response, NextFunction } from "express";
import { response } from "../utils";

const useFallback = (app: Application) => {
    app.use((req: Request, res: Response, next: NextFunction) => {
        return response.error(res.status(404), {
            message: "destination not found",
        });
    });

    app.use((req: Request, res: Response, next: NextFunction) => {
        return response.error(res.status(500), {
            message: "internal server error",
        });
    });
};

export default useFallback;
