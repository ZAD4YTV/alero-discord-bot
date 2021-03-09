const fs = require('fs');

module.exports = (client, Discord) => {
    const command_folder = fs.readdirSync('./server/commands/');
    for (const folder of command_folder) {
        let command_files = fs.readdirSync(`./server/commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of command_files) {
            const command = require(`../commands/${folder}/${file}`);
            if(command.name) {
                client.commands.set(command.name, command);
            } else {
                continue;
            };
        };
    };
};