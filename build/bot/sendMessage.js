"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const sendMessage = (bot, chatId, message, params) => {
    bot.telegram.sendMessage(chatId, message, params);
};
exports.sendMessage = sendMessage;
