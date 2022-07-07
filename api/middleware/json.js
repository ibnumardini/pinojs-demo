"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var useJson = function (app) {
    app.use((0, express_1.json)());
};
exports.default = useJson;
