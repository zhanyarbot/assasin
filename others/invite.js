const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["i"],
  cooldown: 8,
  description: "**invite commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(`

 [Click here](https://discord.com/api/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot) **to invite the bot.**
`)

  
   .setColor("GREEN");
   message.react("♻️")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
