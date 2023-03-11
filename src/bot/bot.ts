import { config } from 'dotenv'
import { Context, Telegraf } from 'telegraf'

import { complimentCommand, startCommand, complimentForMyCommand } from './commands'
import { defaultMiddleware } from './middlewares'

config()

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('Telegram bot token is required')
}

const bot = new Telegraf<Context>(TELEGRAM_BOT_TOKEN)
export type Bot = typeof bot

type InitBot = () => Bot

export const initBot: InitBot = () => {
    bot.use(defaultMiddleware)

    bot.start(startCommand)
    bot.command('compliment', complimentCommand)
    bot.command('compliment_for_my', complimentForMyCommand(bot))

    console.log('[BOT] Initialized')

    return bot
}
