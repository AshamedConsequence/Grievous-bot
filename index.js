const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzMyMjQwMDg3OTU3NjM1MTIz.Xwx1CA.U93uYos0WNBdloAiK5HQ1GsyiC0';
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
