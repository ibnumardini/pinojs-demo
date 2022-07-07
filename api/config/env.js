"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var ip_1 = __importDefault(require("ip"));
var _a = dotenv_1.default.config().parsed, parsed = _a === void 0 ? {} : _a;
exports.default = {
    environment: parsed.NODE_ENV,
    port: parsed.PORT,
    myIp: ip_1.default.address(),
};
