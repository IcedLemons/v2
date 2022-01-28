module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)
        setInterval(() => {

            const activities = ["manhwa","manga","manhua","anime"]

            const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
            const newActivity = activities[randomIndex];
            bot.client.user.setActivity(newActivity , {type: "WATCHING" });
        }, 4000);
    }
}