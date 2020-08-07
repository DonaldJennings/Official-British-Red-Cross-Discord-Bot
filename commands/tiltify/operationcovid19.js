const TiltifyClient = require("tiltify-api-client")
const { MessageEmbed } = require('discord.js')
const logo = `https://pbs.twimg.com/profile_images/1212673630099914754/LqRKu1Ku_400x400.jpg`

module.exports = {

    name: "covid19",
    description: "Returns cause info on Operation COVID-19",
    aliases: ['covid19', 'cv19'],
    usage: '',
    execute(message) {

        client = message.client.tiltifyClient
       
        client.FundraisingEvents.get('275', function (donations) {




            causeInfo = new MessageEmbed()
                .setTitle(donations.name)
                .setDescription(donations.shortDescription)
                .setThumbnail(message.client.BRCLogo)
                .setColor('#FF0000')
                .addField('Closing Date', ` ${donations.endsAt}`, true)
                .addField(`Current Raised`, `£${donations.totalAmountRaised}`, true)
                .addField(`Goal Amount`, `£${donations.fundraiserGoalAmount}`, true)
                .setFooter(message.client.footerMSG, message.client.footerIMG)

            message.channel.send(causeInfo)
        });
        

    }

};