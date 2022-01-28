const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "8ball",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        let responses = ["what" ,
                         "oh" ,
                        "I don't know but you're cute" ,
                        "yesss" ,
                        "nooo" ,
                        "haha what",
                        "uhhhhh",
                        "*pisses uncontrollably*",
                        "uh- uhm- I- uh- yes...",
                        "woaahhhh :00000",
                        "really?",
                        "you have skill issue",
                        "gimme a break man",
                        "yes please",
                        "yeah no, sorry",
                        "what do you mean?",
                        "you're* ||gay||",
                        "https://c.tenor.com/OUFRYBYI7dwAAAAM/ken-jeong-what.gif",
                        "I'm sorry what",
                        "ok and?",
                        "100%",
                        "https://tenor.com/view/innominate-ayo-huh-what-gif-22597769"
                    ]


       let randomArray = responses[Math.floor(Math.random() * responses.length)]

       message.reply(randomArray)
        
    }
}