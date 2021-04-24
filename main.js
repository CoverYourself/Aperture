const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'insert your token here'


//this just says "my botdy is ready" when the bot is online"
bot.on('ready', () =>{ 
	console.log('My botdy is ready');
})

// things used in the statuses
	setInterval(() => {
		const statuses = [
			'Ruining your life',
			'Use >>help to kill yourself.',
			'Take the L, moosh!',
			'Currently offline.',
			'Sassy joke.',
			'Code gladly stolen.'
		]
		
// this changes the status
		const status = statuses[Math.floor(Math.random() * statuses.length)]
		bot.user.setActivity(status, { type: "PLAYING" })
	}, 5000)

// you can replace this with whatever you want
bot.on('message', message => {
  if (message.content.startsWith(">>")) {
    	message.channel.send('friday night funkin sex mod says: aperture is down');
  }
});   

//please replace this, get the client ID of your bot and use https://discordapi.com/permissions.html to generate a new URL
bot.on('message',msg=>{
	if(msg.content.toLowerCase() === '>>invite'){
		msg.reply('https://discord.com/oauth2/authorize?client_id=833506108156936222&scope=bot&permissions=52224');
    }   
	
})
	
bot.login(token);

