
const { MessageEmbed } = require('discord.js')
module.exports = {

    name: "covidleaderboards",
    description: "Returns leaderboards",
    aliases: ['cv19lb', 'cv19rankings', 'cv19leaderboards'],
    usage: 'individual || team',
    execute(message, args) {

        const leaderboardTypes = ['individual', 'team']
        client = message.client.tiltifyClient

        if (!args) return message.channel.send("INVALID USAGE: Please enter 'individual' or 'team' as arguments")


        const lbArg = args.join(' ').toLowerCase()


        client.FundraisingEvents.getLeaderboards('275', function (donations) {

            console.log("PROCESS STARTED: Gathering Leaderboards")

            if (lbArg == "individual") {


                //DEFINES THE LEADERBOARD TYPE BASED ON INDEX IN ARRAY

                console.log("PROCESS UPDATE: Found Argument as Individual")

                individualEmbed = new MessageEmbed()
                    .setTitle("Individual Leaderboard")
                    .setColor('#FF0000')
                    .setDescription('Top Earning individuals from the Operation Covid 19 Cause')
                    .setThumbnail(message.client.BRCLogo)
                    .setFooter(message.client.footerMSG, message.client.footerIMG)
                for (i = 0; i <= 9; i++) {
                    individualEmbed.addField(`#${i + 1}`, `Name: **${donations.individual[i].name}** || Raised : **£${donations.individual[i].amountRaised}**`)
                }

                message.channel.send(individualEmbed)


            } else if (lbArg == "team") {



                console.log("PROCESS UPDATE: Found Argument as team")
                teamEmbed = new MessageEmbed()
                    .setTitle("Team Leaderboard")
                    .setColor('#FF0000')
                    .setDescription('Top Earning individuals from the Operation Covid 19 Cause')
                    .setThumbnail(message.client.BRCLogo)
                    .setFooter(message.client.footerMSG, message.client.footerIMG)
                for (i = 0; i <= 9; i++) {
                    teamEmbed.addField(`#${i + 1}`, `Name: **${donations.team[i].name}** || Raised : **£${donations.team[i].amountRaised}**`)
                }

                message.channel.send(teamEmbed)


            } else {


                console.log("ERROR: Not able to determine whether argument was individual or team")
                message.channel.send(`INVALID USAGE : Please supply arguments 'individual' or 'team'`)

            }



        });


    }

};