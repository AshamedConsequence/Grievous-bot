const Discord = require('discord.js');
const { token } = require('./config.json')
const bot = new Discord.Client();

const regex = /.*hello\ *there$/gi;

bot.on('ready', () => {
	console.log('Bot is online')
})

bot.on('message', (msg) => {
	if (msg.content.match(regex)) {
		msg.reply("you are a bold one")
	}
})

bot.login(token)
