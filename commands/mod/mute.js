const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const ms = require("ms")

module.exports = {
    name: "mute",
    category: "info",
    permissions: ["MANAGE_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {

        const target = message.mentions.users.first();

        const error = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('Please specify a valid user')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const amount = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Error\n')
	    .setDescription('Please enter time amount')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const cmd = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Error\n')
	    .setDescription('Please specify valid content')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        if(!target) return message.channel.send({ embeds: [error] })
        if (!args[1]) return message.channel.send({ embeds: [amount] })
        const memberTarget = message.guild.members.cache.get(target.id);
        const time = ms(args[1])
        const reason = args[2] || null
        memberTarget.timeout(time, reason).catch(err => {
            message.channel.send({ embeds: [cmd] });
        })
        const mutereply = new MessageEmbed()
	    .setColor('#FEE75C')
	    .setTitle('Success\n')
	    .setDescription (`${target} has been timed out for ${ms(time, { long: true })}`)
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        message.channel.send({ embeds: [mutereply] });
        
    }
}