"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pino_1 = __importDefault(require("pino"));
var express_pino_logger_1 = __importDefault(require("express-pino-logger"));
var pino_pretty_1 = __importDefault(require("pino-pretty"));
var useLogger = function (app) {
    var pretty = (0, pino_pretty_1.default)({
        colorize: true,
        translateTime: true,
    });
    var pino = (0, pino_1.default)(pretty).child({ dev: "@ibnumardini" });
    // @ts-ignore
    var logger = (0, express_pino_logger_1.default)({ logger: pino });
    app.use(logger);
};
exports.default = useLogger;
