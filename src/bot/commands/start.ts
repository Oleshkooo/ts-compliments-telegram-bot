import { BotCommand } from '../../types'

export const startCommand: BotCommand = async ctx => {
    const name = ctx?.from?.first_name || 'незнайомець'

    await ctx.reply(`Welcome, *${name}*`, { parse_mode: 'Markdown' })
    await ctx.reply(`I'll send you compliments every day✨`)
    await ctx.reply(`If you want to get a compliment right now, just type /compliment`)
}
