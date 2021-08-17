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
    .setTitle(`**Nito ✨**`)
    .setDescription(`
    
**__Moderator__**
⚙️ \`,lock\`  -  \`,unlock\`  -  \`,clear\`  -  \`,kick\`
⚙️ \`,ban\`  -  \`,unban\`  -  \`,sug\`


**__Funny__**
🤣 \`,slap\`  -   \`,kiss\`  -  \`,hug\`


**__Gif__**
✨ \`,boy\`   -   \`,girl\`   -  \`,baby\`  -  \`,couple\`
✨ \`,anime\`  -  \`,cat\`  -  \`,cartoon\`  -  \`,smoke\`
✨ \`,sad\`  -  \`,neon\`


**__Music__**
🎶 \`,play\`  -  \`,skip\`  -  \`,skipto\`  -  \`,stop\`  
🎶 \`,volume\`  -  \`,nowplaying\`  -  \`,shuffle\`
🎶 \`,search\`  -  \`,resume\`  -  \`,remove\`
🎶 \`,queue\`  -  \`,loop\`  -  \`,lyrics\`  -  \`,radio\`


**__Everyone__**
🌐 \`,invite\`  -  \`,support\`  -  \`,about\`  -  \`,ping\`
🌐 \`,prefix\`  -  \`,uptime\`


[Support](https://discord.gg/DCYsfe4AR6)
[Invite](https://discord.com/api/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("<a:emoji_33:861768453936381963>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
