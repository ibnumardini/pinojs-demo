import express, { Express } from "express";
import { env } from "./config";
import useRouter from "./router";
import useMiddleware from "./middleware";
import { logger } from "./utils";

const app: Express = express();

useMiddleware(app);
useRouter(app);

app.listen(env.port, () => {
    logger.info(`App running at http://${env.myIp}:${env.port}`);
});
