const { Telegraf } = require("telegraf");
const TOKEN = "1792423259:AAGNSupiUuRd5LyvQSM9mtLEHMd673XHPAI";
const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Welcome'));
bot.launch();
