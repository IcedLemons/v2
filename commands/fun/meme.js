const { MessageEmbed } = require('discord.js');
const fetch = require('cross-fetch')

module.exports = {
    name: "meme",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(async json => {
            let msg = await message.channel.send('Fetching your meme')

            const HugEmbed = new MessageEmbed()
            .setTitle(json.title)
            .setColor('#57F287')
            .setImage(json.url)
            .setDescription(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
            .setTimestamp()
	        .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

            message.channel.send({ embeds: [HugEmbed] });
        })
    }
}