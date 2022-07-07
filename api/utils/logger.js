"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pino_1 = __importDefault(require("pino"));
var pino_pretty_1 = __importDefault(require("pino-pretty"));
var pretty = (0, pino_pretty_1.default)({
    colorize: true,
    translateTime: true,
});
var logger = (0, pino_1.default)(pretty);
exports.default = logger;
