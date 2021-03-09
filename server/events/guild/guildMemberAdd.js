const { GuildMember, GuildMemberManager } = require("discord.js");
const colors = require('colors')

module.exports = (Discord, client, GuildMember, GuildMemberManager) => {
    GuildMember.roles.add(['818340308990427138']);
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Welcome, ${GuildMember.user.username}`)
        .setAuthor('Alero', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png')
        .setDescription('Welcome to our server! Make sure to check out \n the rules text channel!')
        .setThumbnail(GuildMember.user.avatarURL())
        .setTimestamp()
        .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');

        
    GuildMember.guild.channels.cache.get('816740392916615209').send(embed).then(console.log(`MEMBER JOINED, ID: <@${GuildMember.user.id}>`.bgGreen.red));
    // `Welcome <@${GuildMember.user.id}> to our server! Make sure to check out the rules text channel!`
}