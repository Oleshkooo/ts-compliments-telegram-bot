"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schedule_1 = __importDefault(require("node-schedule"));
const services_1 = require("./services");
const bot_1 = require("./bot");
const bot_2 = require("./bot");
const botUsers = [
    {
        username: 'oleshkooo',
        id: 673723655,
    },
];
const bot = (0, bot_2.initBot)();
const rule = new node_schedule_1.default.RecurrenceRule();
rule.hour = 10;
const shd = node_schedule_1.default.scheduleJob(rule, async () => {
    const compliment = await (0, services_1.getCompliment)();
    botUsers.forEach(user => {
        (0, bot_1.sendMessage)(bot, user.id, `${compliment}✨`);
    });
});
bot.launch();
