module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)
        setInterval(() => {
            bot.client.user.setActivity("test", { type: "PLAYING" })
            const activities = ["-commands","manga","-commands"]

            const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
            const newActivity = activities[randomIndex];
        
            bot.client.user.setActivity(newActivity);
        }, 5000);
    }
}