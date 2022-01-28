const discord = require('discord.js')
const translate = require('@iamtraction/google-translate')
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "translate",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const invalid = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('Please provide text to translate')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const error = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Error\n')
	    .setDescription('Please specify valid content')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        const txt = args.join(" ")
        if(!txt) return message.channel.send({ embeds: [invalid] })
        translate(txt, { to: 'en' }).then(res => {
            const reply = new discord.MessageEmbed()
            .setColor('#57F287')
            .setTitle('Translation result')
            .setDescription(res.text)
            .setTimestamp()
            .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });
            message.channel.send({ embeds: [reply] })
        }).catch(err => {
            message.channel.send({ embeds: [error] });
        })
        
    }
}