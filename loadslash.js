const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');

require("dotenv").config()

const client = new Discord.Client({ intents: 32767 });

let bot = {
    client
}



const guildId = "843820964155228170"

client.slashcommands = new Discord.Collection() 

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

const gd = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('Target guild not found')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

client.on("ready", async () => {
    const guild = client.guilds.cache.get(guildId)
    if (!guild)

    return console.error({ embeds: [gd]})

    await guild.commands.set([...client.slashcommands.values()])
    console.log(`Successfully loaded in ${client.slashcommands.size} slash commands`)
    process.exit(0)
    
})

client.login(process.env.TOKEN)