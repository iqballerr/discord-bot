const Discord = require('discord.js');
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

  if(command == 'help'){
      message.channel.send("Sorry bud, but I can't help you");
  }
});

const TOKEN = process.env.TOKEN;

client.login(TOKEN);
