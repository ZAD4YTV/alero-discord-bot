module.exports = {
    name: 'ping',
    description: 'This is a Ping command!',
    execute(client, message, args) {
        message.channel.send('🏓 Pong!');
    },
};