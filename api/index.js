"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./config");
var router_1 = __importDefault(require("./router"));
var middleware_1 = __importDefault(require("./middleware"));
var utils_1 = require("./utils");
var app = (0, express_1.default)();
(0, middleware_1.default)(app);
(0, router_1.default)(app);
app.listen(config_1.env.port, function () {
    utils_1.logger.info("App running at http://".concat(config_1.env.myIp, ":").concat(config_1.env.port));
});
