const Discord = require("discord.js")
const {MessageEmbed} = require("discord.js")

const durations = [
	{ name: "60 seconds", value: 60 * 1000 },
	{ name: "5 minutes", value: 5 * 60 * 1000 },
	{ name: "10 minutes", value: 10 * 60 * 1000 },
	{ name: "30 minutes", value: 30 * 60 * 1000 },
	{ name: "1 hour", value: 60 * 60 * 1000 },
	{ name: "1 day", value: 24 * 60 * 60 * 1000 },
	{ name: "1 week", value: 7 * 24 * 60 * 60 * 1000 },
]

const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")
    let duration = interaction.options.getNumber("duration")
    let reason = interaction.options.getString("reason") || "No reason given"

    const invUser = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('Please specify a valid user')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

    if (!member) return interaction.reply({ embeds: [invUser] })

    const mutereply = new MessageEmbed()
	    .setColor('#FEE75C')
	    .setTitle('Success\n')
	    .setDescription (`**${member.user.tag}** has been timed out for ${durations.find(d=> duration === d.value)?.name}\n\n**Reason:** ${reason}`)
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

    const error = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Error\n')
	    .setDescription(`Failed to timeout ${member.user.tag}`)
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

    try {
        await member.timeout(duration, reason)
        return interaction.reply({ embeds: [mutereply] })
    }

    catch(err){
        if (err){
            console.error(err)
            return interaction.reply({ embeds: [error] })
        }
    }
}

module.exports = {
    name: "timeout",
    description: "Timeout a member",
    perm: "MODERATE_MEMBERS",
    options: [
        {
            name: "user", description: "The user to timeout",
            type: "USER", required: true
        },
        {
            name: "duration",
            description: "The duration of the timeout",
            type: "NUMBER",
            choices: durations,
            require: true
        },
        {
            name: "reason",
            description: "reason for punishment",
            type: "STRING",
            required: false
        }
    ],
    run
}