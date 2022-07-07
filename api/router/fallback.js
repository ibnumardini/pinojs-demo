"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var useFallback = function (app) {
    app.use(function (req, res, next) {
        return utils_1.response.error(res.status(404), {
            message: "destination not found",
        });
    });
    app.use(function (req, res, next) {
        return utils_1.response.error(res.status(500), {
            message: "internal server error",
        });
    });
};
exports.default = useFallback;
