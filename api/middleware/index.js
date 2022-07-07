"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./logger"));
var json_1 = __importDefault(require("./json"));
var useMiddleware = function (app) {
    (0, logger_1.default)(app);
    (0, json_1.default)(app);
};
exports.default = useMiddleware;
