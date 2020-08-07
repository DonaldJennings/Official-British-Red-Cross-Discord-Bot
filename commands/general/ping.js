

module.exports = {

    name: 'ping',
    description: 'Gets user ping',
    aliases: ['pi'],
    execute(message) {
        message.channel.send("Pinging...") // Placeholder for ping
            .then(msg => {
                msg.edit(`Ping: ${Date.now() - msg.createdTimestamp}`)
            });
    }

};