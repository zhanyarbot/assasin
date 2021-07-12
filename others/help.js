const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(` `)
    .setTitle(`**Nito**`)
    .setDescription(`
    
**__Moderator__**
<a:Work:863855778623782963>︙\`,lock\`  -  \`,unlock\`  -  \`,clear\`  -  \`,kick\`
<a:Work:863855778623782963>︙\`,ban\`  -  \`,unban\`  -  \`,sug\`


**__Funny__**
<a:emoji_83:840302145605730304>︙,slap - ,kiss - ,hug


**__Gif__**
<a:emoji_27:839946546443321345>︙,boy - ,girl - ,baby - ,couple
<a:emoji_27:839946546443321345>︙,anime - ,cat - ,cartoon - ,smoke
<a:emoji_27:839946546443321345>︙,sad - ,neon


**__Everyone__**
<a:emoji_work:840358507185176587>︙,invite - ,support - ,about - ,ping
<a:emoji_work:840358507185176587>︙,prefix - ,uptime 


[Support](https://discord.gg/6MGtNxJNBk)
[Invite](https://discord.com/api/oauth2/authorize?client_id=837016151795564544&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
