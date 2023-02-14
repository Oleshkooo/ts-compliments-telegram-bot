"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBot = exports.TELEGRAM_BOT_TOKEN = void 0;
const dotenv_1 = require("dotenv");
const telegraf_1 = require("telegraf");
const commands_1 = require("./commands");
const middlewares_1 = require("./middlewares");
(0, dotenv_1.config)();
exports.TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
if (!exports.TELEGRAM_BOT_TOKEN) {
    throw new Error('Telegram bot token is required');
}
const bot = new telegraf_1.Telegraf(exports.TELEGRAM_BOT_TOKEN);
const initBot = () => {
    bot.use(middlewares_1.defaultMiddleware);
    bot.start(commands_1.startCommand);
    bot.command('compliment', commands_1.complimentCommand);
    console.log('[BOT] Initialized');
    return bot;
};
exports.initBot = initBot;
