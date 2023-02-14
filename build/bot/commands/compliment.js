"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complimentCommand = void 0;
const services_1 = require("../../services");
const complimentCommand = async (ctx) => {
    const compliment = await (0, services_1.getCompliment)();
    const capitalizedCompliment = (0, services_1.capitalizeFirstLetter)(compliment);
    ctx.reply(`${capitalizedCompliment}✨`);
};
exports.complimentCommand = complimentCommand;
