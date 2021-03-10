const Discord = require('discord.js');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();


const client = new Discord.Client();

const prefix = '$';


client.once('ready', () => {
	console.log('Bot Iq is online!');
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command == 'help') {
		message.channel.send('Sorry bud, but I can\'t help you. Hint: \'$commands\'');

	}
	else if(command == 'commands') {
		message.channel.send('Commands: $help, $hello, $iqbal');

	}
	else if(command == 'hello') {
		message.channel.send('Hi! Nice to meet you bud :)');

	}
	else if(command == 'iqbal') {
		message.channel.send('Iqbot');
	}

});

const TOKEN = process.env.TOKEN;

client.login(TOKEN);
