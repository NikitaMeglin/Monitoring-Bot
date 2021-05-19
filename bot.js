const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() {
	gamedig.query({type: 'Name', IP: '185....', port: '...'
		}).then((state) => {
			bot.user.setActivity(`Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`offline`, {type: 0});
		});
}
bot.login("loginbot")
bot.on('ready', async () => {
	console.log('BOTUP')
	online()
	setInterval(online, 10000)
});