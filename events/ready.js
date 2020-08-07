
module.exports = (client, message) => {

    console.log(`Signed in as: ${client.user.tag}`);
    console.log(`client.config.prefix: ${client.config.prefix}`);

    client.user.setStatus('Available');
    client.user.setPresence({ activity: { name: "the console logs" } });
    try {
        client.user.setPresence({ activity: { type: "PLAYING", name: "Operation COVID-19", url: "https://tiltify.com/british-red-cross/operation-covid-19-1" } });
    } catch (err) {
        console.log(err)
    }

}