"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMiddleware = void 0;
const telegraf_1 = require("telegraf");
const defaultMiddleware = (ctx, next) => {
    const messageText = (0, telegraf_1.deunionize)(ctx.message)?.text;
    next();
};
exports.defaultMiddleware = defaultMiddleware;
