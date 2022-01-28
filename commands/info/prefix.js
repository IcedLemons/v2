const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const user = new MessageEmbed()
	    .setColor('#57F287')
	    .setTitle('Info\n')
	    .setDescription('Did you forget? My prefix is [ ; ]')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        message.channel.send({ embeds: [user] });
        
    }
}