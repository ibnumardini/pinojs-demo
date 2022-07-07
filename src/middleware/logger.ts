import { Application } from "express";
import P from "pino";
import PLogger from "express-pino-logger";
import PPretty from "pino-pretty";

const useLogger = (app: Application) => {
    const pretty = PPretty({
        colorize: true,
        translateTime: true,
    });

    const pino = P(pretty).child({ dev: "@ibnumardini" });
    // @ts-ignore
    const logger = PLogger({ logger: pino });

    app.use(logger);
};

export default useLogger;
