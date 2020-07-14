const Discord = require('discord.js');
const { token } = require('./config.json')
const bot = new Discord.Client();

const regex = /.*h *e *l *l *o *t *h *e *r *e.*/gi;
// Makes it so the bot has a specific answer to an uwu'd hello there
const wegex = /.*h *e *(l *l|w *w) *o(( |\n)*)t *h *e *(r|w) *e.*/gi;

bot.on('ready', () => {
	console.log('Bot is online')
})

bot.on('message', (msg) => {
	if (msg.content.match(regex)) {
		msg.reply("you are a bold one")
	} else if (msg.content.match(wegex)) {
		msg.reply("you awe a bowd wan")
	}
})

bot.login(token)
