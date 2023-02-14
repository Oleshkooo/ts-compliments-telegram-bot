import { Bot } from './bot'

type SendMessage = (bot: Bot, chatId: number, message: string, params?: Object) => void

export const sendMessage: SendMessage = (bot, chatId, message, params) => {
    bot.telegram.sendMessage(chatId, message, params)
}
