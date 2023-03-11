"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complimentForMyCommand = void 0;
const services_1 = require("../../services");
const MY_LOVE_ID = '475499907';
const complimentForMyCommand = bot => {
    return async (ctx) => {
        const compliment = await (0, services_1.getCompliment)();
        const capitalizedCompliment = (0, services_1.capitalizeFirstLetter)(compliment) + '✨';
        bot.telegram.sendMessage(MY_LOVE_ID, capitalizedCompliment);
        ctx.reply(`Compliment sent: ${capitalizedCompliment}`);
    };
};
exports.complimentForMyCommand = complimentForMyCommand;
