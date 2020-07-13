const Discord = require('discord.js');
const { token } = require('./config.json')
const bot = new Discord.Client();

const regex = /.*hello\ *there.*/gi;
const wegex = /.*he(ll|ww)o *the(r|w)e.*/gi; // Makes it so the bot has a specific answer to an uwu'd hello there

bot.on('ready', () => {
	console.log('Bot is online')
})

bot.on('message', (msg) => {
	if (msg.content.match(regex)) {
		msg.reply("you are a bold one")
	} else if (msg.content.match(wegex)) {
		msg.reply("you awe a bowd onye")
	}
})

bot.login(token)
