const Discord = require('discord.js');
const dotenv = require('dotenv').config();


const client = new Discord.Client();


client.once('ready', () => {
    console.log('Bot Iq is online!');
});

const TOKEN = process.env.TOKEN;

client.login(TOKEN)
