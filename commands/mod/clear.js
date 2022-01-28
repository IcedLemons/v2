const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "clear",
    category: "mod",
    permissions: ["MANAGE_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {

        const user = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('You\'re missing permissions!')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const invalid = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('Invalid number\n (Can\'t be 0 and must be bellow 200')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        if (message.deletable) {
            message.delete();
        }

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!args[0]) return message.reply({ embeds: [invalid] });
    
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.reply({ embeds: [user] }).then(m => m.delete(5000));
        }

    
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply({ embeds: [invalid] }).then(m => m.delete(5000));
        }
    
        let deleteAmount;
        if (parseInt(args[0]) > 200) {
            deleteAmount = 200;
        } else {
            deleteAmount = parseInt(args[0]);
        }
    
        message.channel.bulkDelete(deleteAmount, true)
        .catch(err => message.reply({ embeds: [invalid] }));
    
    }
}