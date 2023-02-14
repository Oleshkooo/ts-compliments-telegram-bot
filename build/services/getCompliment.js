"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompliment = void 0;
const axios_1 = __importDefault(require("axios"));
const getCompliment = async () => {
    const { data } = await axios_1.default.get('https://complimentr.com/api');
    return data.compliment;
};
exports.getCompliment = getCompliment;
