const Discord = require('discord.js');
const colors = require('colors');

module.exports = {
    name: 'clear',
    aliases: ['clear-msg', 'clearmsg'],
    category: 'Moderation',
    description: 'Send an embed with some colors (roles) for choose.',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    cooldown: '3s',
    minArgs: 1,
    maxArgs: 1,
    permissions: ['MANAGE_MESSAGES'],
    init: (client, instance) => {
        console.log('Reaction-Role Command Loaded'.yellow);
    },
    callback: async({message, args, text, client, prefix, instance, channel}) => {
        if(isNaN(args[0])) return message.reply("Please enter a real number!");
        if(args[0] < 1) return message.reply("You must delete at least one message!");

        if(args[0] <= 100) {
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
                message.reply(`✅Deleted \`${args[0]} Messages succesfully!\`✅`);
            });
        } else {
            message.reply("You can't delete more than 100 messages, please enter again the command below!");
        };
        /* At the end */
        console.log('- - - - Clear Executed.'.bgBlue.black);
    }
}