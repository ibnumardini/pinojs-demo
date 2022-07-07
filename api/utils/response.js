"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FmtResponse = {
    success: function (res, _a) {
        var message = _a.message, results = _a.results;
        res.json({
            ok: true,
            message: message !== null && message !== void 0 ? message : "success!",
            results: results !== null && results !== void 0 ? results : {},
        });
    },
    error: function (res, _a) {
        var message = _a.message;
        res.json({
            ok: false,
            message: message !== null && message !== void 0 ? message : "failed!",
        });
    },
};
exports.default = FmtResponse;
