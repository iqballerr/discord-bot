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
		// eslint-disable-next-line no-unused-vars
		const commands_embed = new Discord.MessageEmbed()
			.setColor('AQUA')
			.setTitle('Bot Iq Basic Commands')
			.setTimestamp()
			.addFields(
				{ name: '$help, $hello, $iqbal, $commands, $serverinfo', value: 'More commands coming soon...' },
			);
		// eslint-disable-next-line no-undef
		message.channel.send(commands_embed);
	}
	else if(command == 'hello') {
		message.channel.send('Hi! Nice to meet you bud :)');

	}
	else if(command == 'iqbal') {
		message.channel.send('Iqbot');

	}
	else if(command == 'serverinfo') {
		const { guild } = message;

		const { name, region, memberCount, owner, afkTimeout } = guild;
		const icon = guild.iconURL();

		const embed = new Discord.MessageEmbed()
			.setTitle(`Server info for "${name}"`)
			.setThumbnail(icon)
			.addFields(
				{
					name: 'Region',
					value: region,
				},
				{
					name: 'Members',
					value: memberCount,
				},
				{
					name: 'Owner',
					value: owner.user.tag,
				},
				{
					name: 'AFKTimeout',
					value: afkTimeout / 60,
				},
			);

		message.channel.send(embed);
	}

});

const TOKEN = process.env.TOKEN;

client.login(TOKEN);
