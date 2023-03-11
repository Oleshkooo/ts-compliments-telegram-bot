import { BotCommand } from '../../types'
import { capitalizeFirstLetter, getCompliment } from '../../services'
import type { Bot } from '../bot'

type ComplimentForMyCommand = (bot: Bot) => BotCommand

const MY_LOVE_ID = '475499907'

export const complimentForMyCommand: ComplimentForMyCommand = bot => {
    return async ctx => {
        const compliment = await getCompliment()
        const capitalizedCompliment = capitalizeFirstLetter(compliment) + '✨'
        bot.telegram.sendMessage(MY_LOVE_ID, capitalizedCompliment)
        ctx.reply(`Compliment sent: ${capitalizedCompliment}`)
    }
}
