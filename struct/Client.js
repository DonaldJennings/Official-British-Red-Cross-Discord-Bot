const { Client, Collection } = require('discord.js');
const TiltifyClient = require("tiltify-api-client")

module.exports = class extends Client {
    constructor(config) {
        super({
            disableMentions: 'everyone'
        });

        this.commands = new Collection();

        this.cooldowns = new Collection();

        this.config = config;

        this.tiltifyClient = new TiltifyClient(this.config.tiltifyAPI)

        this.BRCLogo = "https://pbs.twimg.com/profile_images/1212673630099914754/LqRKu1Ku_400x400.jpg"

        this.footerIMG = "https://avatars2.githubusercontent.com/u/48395813?s=460&u=d247514817514d8ef52ec320ab2d492f6b24530f&v=4"

        this.footerMSG = `Official British Red Cross Discord bot developed by DonaldJennings#7915`

    }
};
