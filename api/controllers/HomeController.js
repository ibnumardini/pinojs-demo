"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var HomeController = {
    index: function (req, res) {
        var _a = req.query.name, name = _a === void 0 ? "fulan" : _a;
        var resp = {
            results: {
                hello: "world",
                name: name,
            },
        };
        return utils_1.response.success(res, resp);
    },
};
exports.default = HomeController;
