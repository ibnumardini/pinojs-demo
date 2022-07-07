import { Router } from "express";
import { HomeController as Home } from "../controllers";

const homeRouter = Router();

homeRouter.get("/", Home.index);

export default homeRouter;
