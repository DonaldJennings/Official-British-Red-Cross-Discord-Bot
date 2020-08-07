const TiltifyClient = require("tiltify-api-client")
const { MessageEmbed } = require('discord.js')
const logo = `https://pbs.twimg.com/profile_images/1212673630099914754/LqRKu1Ku_400x400.jpg`

module.exports = {

    name: "beirut",
    description: "Returns cause info on Operation Beirut",
    aliases: ['operationbeirut', 'beirut'],
    usage: '',
    execute(message) {

        client = message.client.tiltifyClient

        client.FundraisingEvents.get('402', function (data) {
            
            

            causeInfo = new MessageEmbed()
                .setTitle(data.name)
                .setDescription(data.shortDescription)
                .setThumbnail(message.client.BRCLogo)
                .setColor('#FF0000')
                .addField('Closing', `${data.endsAt}`, true)
                .addField(`Current Raised `, `\u00a3${data.totalAmountRaised}`, true)
                .addField(`Goal Amount `, `\u00a3${data.fundraiserGoalAmount}`, true)
                .setFooter(message.client.footerMSG, message.client.footerIMG)

            message.channel.send(causeInfo)

        })

    }

};