const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "mod",
    permissions: ["KICK_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {

        //Embeds

        const missinguser = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription ('You need to put someone in this command!\n')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const user = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('You\'re missing permissions!')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const invalid = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Error\n')
	    .setDescription('Please specify a valid user')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const bot = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('I\'m missing permissions!')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

		const hr = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('Please specify a valid user')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        //Ban code

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!args[0]) return message.reply({ embeds: [missinguser] });

		// let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        // if (toKick.highestRole.position >= message.member.highestRole.position) return message.channel.send("The user has greater role than you");

        if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send({ embeds: [user] });
        if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply({ embeds: [bot] });
        if (message.member.id === member.id) return message.reply({ embeds: [invalid] });
        
        let reason = args.slice(1).join(" ") || "No reason"

        //Ban reply
        const banreply = new MessageEmbed()
	    .setColor('#FEE75C')
	    .setTitle('Success\n')
	    .setDescription (`${member} just got kicked.\n\n**REASON:** ${reason}`)
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        member.kick({ reason:reason })
        message.channel.send({ embeds: [banreply] });
    }
}