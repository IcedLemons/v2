const Discord = require("discord.js")
const {MessageEmbed} = require("discord.js")


const run = async (client, interaction) => {

    interaction.reply('Calculating ping...').then((resultMessage) => {

        let event = context.params.event;
        const ping = new Date() - new Date(context.params.event.received_at)
        const lat = new MessageEmbed()
        .setColor('#57F287')
        .setTitle('Pong!\n')
        .setDescription(`**Bot Latency:** ${ping}_ms_\n\n**API Latency:** ${client.ws.ping}_ms_`)
        .setTimestamp()
        .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });
        resultMessage.edit({ embeds: [lat] });
    })
}

module.exports = {
    name: "ping",
    description: "Ping the bot latency",
    perm: "",
    options: [
    ],
    run
}