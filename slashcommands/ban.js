const {MessageEmbed} = require("discord.js")

const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "No reason given"

    const invUser = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Invalid\n')
	    .setDescription('Please specify a valid user')
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

    if (!member) return interaction.reply({ embeds: [invUser] })

    const reply = new MessageEmbed()
	    .setColor('#FEE75C')
	    .setTitle('Success\n')
	    .setDescription (`${member.user.tag} has been banned\n**Reason:** ${reason}`)
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

    const error = new MessageEmbed()
	    .setColor('#E74C3C')
	    .setTitle('Error\n')
	    .setDescription(`Failed to ban ${member.user.tag}`)
	    .setTimestamp()
	    .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

    try {
        await interaction.guild.bans.create(member, {
            reason
        })
        return interaction.reply({ embeds: [reply] })
    }
    catch(err){
        if (err){
            console.error(err)
            return interaction.reply({ embeds: [error] })
        }
    }
}

module.exports = {
    name: "ban",
    description: "Bans a member",
    perm: "BAN_MEMBERS",
    options: [
        {
            name: "user", description: "The user to ban",
            type: "USER", required: true
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