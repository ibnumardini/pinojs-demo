"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fallback_1 = __importDefault(require("./fallback"));
var product_1 = __importDefault(require("./product"));
var home_1 = __importDefault(require("./home"));
var useRouter = function (app) {
    app.use("/", home_1.default);
    app.use("/product", product_1.default);
    (0, fallback_1.default)(app);
};
exports.default = useRouter;
