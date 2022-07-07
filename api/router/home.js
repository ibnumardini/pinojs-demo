"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var homeRouter = (0, express_1.Router)();
homeRouter.get("/", controllers_1.HomeController.index);
exports.default = homeRouter;
