import { BotCommand } from 'types'
import { capitalizeFirstLetter, getCompliment } from '../../services'

export const complimentCommand: BotCommand = async ctx => {
    const compliment = await getCompliment()
    const capitalizedCompliment = capitalizeFirstLetter(compliment)
    ctx.reply(`${capitalizedCompliment}✨`)
}
