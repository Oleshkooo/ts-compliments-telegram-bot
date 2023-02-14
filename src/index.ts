import schedule from 'node-schedule'

import { getCompliment } from './services'
import { sendMessage } from './bot'
import { initBot } from './bot'

const botUsers = [
    {
        username: 'oleshkooo',
        id: 673723655,
    },
]

const bot = initBot()

const rule = new schedule.RecurrenceRule()
rule.hour = 10

const shd = schedule.scheduleJob(rule, async () => {
    const compliment = await getCompliment()

    botUsers.forEach(user => {
        sendMessage(bot, user.id, `${compliment}✨`)
    })
})

bot.launch()
