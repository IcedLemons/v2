const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "unban",
    category: "mod",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {

        const userId = args[0]
        message.guild.members.unban(userId).then((user) => {

            const unban = new MessageEmbed()
	        .setColor('#57F287')
	        .setTitle('Success')
	        .setDescription(`${user.tag} was unbanned.`)
	        .setTimestamp()
	        .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

            message.channel.send({ embeds: [unban] });
        }).catch(() => {

            const invalid = new MessageEmbed()
	        .setColor('#E74C3C')
	        .setTitle('Success')
	        .setDescription(`Specify a valid banned member's id.`)
	        .setTimestamp()
	        .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

            message.channel.send({ embeds: [invalid] });
        })
    }
}