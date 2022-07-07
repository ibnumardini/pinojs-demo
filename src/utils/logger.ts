import P from "pino";
import PPretty from "pino-pretty";

const pretty = PPretty({
    colorize: true,
    translateTime: true,
});

const logger = P(pretty);

export default logger;
