const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**حياك في سيرفرنا 🌹 
https://discord.gg/76Gd56S
جيف اوايات و نظام انفايت قوي 💪 **`) 
}).catch(console.error)
})

client.login(process.env.TOKEN)