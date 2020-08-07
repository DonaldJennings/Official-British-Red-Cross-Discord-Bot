const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const prefix = message.client.config.prefix
        const data = [];
        const { commands } = message.client;

        if (!args.length) {

            //GENERAL HELP DM
            HEmbed = new MessageEmbed()
                .setTitle(`List of Commands`)
                .setDescription(`Here is a list of all my commands \nYou can send ${prefix}help [command name] to get info on a specific channel`)
                .setColor('#FF0000')
                .setThumbnail(message.client.user.displayAvatarURL())
                .setFooter(message.client.footerMSG, "https://avatars3.githubusercontent.com/u/48395813?s=460&u=a9fe620313b81a7a6344f80ea1557b13b92035d5&v=4")
            commands.forEach((command) => {
                HEmbed.addField(`${command.name}`, `${command.description}`, true)
            });



            return message.author.send({ split: true, embed: HEmbed })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you!');
                });
        }


        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        HEmbed = new MessageEmbed()
            .setTitle(`**Help on ${command.name}**`)
            .setThumbnail(message.client.BRCLogo)
            .setColor('#FF0000')
            .addField(`**Name**`, `${command.name}`)
            .addField(`**Aliases**`, `${command.aliases.join(', ')}`)
            .addField(`**Description**`, `${command.description}`, true)
            .addField(`**Usage:**`, `${prefix}${command.name} ${command.usage}`)
            .addField(`**Cooldown:**`, `${command.cooldown || 3} second(s)`)
            .setFooter(message.client.footerMSG, "https://avatars3.githubusercontent.com/u/48395813?s=460&u=a9fe620313b81a7a6344f80ea1557b13b92035d5&v=4")

        message.channel.send({ split: true, embed: HEmbed });
    },
};