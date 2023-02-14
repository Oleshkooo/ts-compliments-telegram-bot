"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCommand = void 0;
const startCommand = async (ctx) => {
    const name = ctx?.from?.first_name || 'незнайомець';
    await ctx.reply(`Welcome, *${name}*`, { parse_mode: 'Markdown' });
    await ctx.reply(`I'll send you compliments every day✨`);
    await ctx.reply(`If you want to get a compliment right now, just type /compliment`);
};
exports.startCommand = startCommand;
