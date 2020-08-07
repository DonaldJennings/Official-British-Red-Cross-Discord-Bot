

const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

require('dotenv-flow').config();


const Client = require('./struct/Client');
const client = new Client({ token: process.env.TOKEN, prefix: process.env.PREFIX, tiltifyAPI: process.env.tiltifyAPIKey });

fs.readdir('./Handlers/', (err, files) => {
    if (err) return console.error(err)

    files.forEach(file => {
        const event = require(path.join(__dirname, "Handlers", file));
        event.run(client);
    })
})

client.login(client.config.token);
