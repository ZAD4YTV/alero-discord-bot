'use strict'

/* Modules */
const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER"]});
/* Commands */
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./server/handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);
