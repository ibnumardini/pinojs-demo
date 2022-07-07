import { Application } from "express";
import useLogger from "./logger";
import useJson from "./json";

const useMiddleware = (app: Application) => {
    useLogger(app);
    useJson(app);
};

export default useMiddleware;
