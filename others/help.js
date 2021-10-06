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
    .setThumbnail(``)
    .setTitle(`**Green Bot**`)
    .setDescription(`
    
**🟢┇Moderator**
> \`,lock\`  -  \`,unlock\`  -  \`,clear\`  -  \`,kick\`
> \`,ban\`  -  \`,unban\`  -  \`,sug\`

**🟢┇Funny**
> \`,slap\`  -  \`,kiss\`  -  \`,hug\`

**🟢┇Gif**
> \`,boy\`  -  \`,girl\`  -  \`,baby\`  -  \`,couple\`
> \`,anime\`  -  \`,cat\`  -  \`,cartoon\`  -  \`,smoke\`
> \`,sad\`  -  \`,neon\`

**🟢┇Music**
> \`,play\`  -  \`,skip\`  -  \`,skipto\`  -  \`,stop\`  
> \`,volume\`  -  \`,nowplaying\`  -  \`,shuffle\`
> \`,search\`  -  \`,resume\`  -  \`,remove\`
> \`,queue\`  -  \`,loop\`  -  \`,lyrics\`  -  \`,radio\`

**🟢┇Everyone**
> \`,invite\`  -  \`,support\`  -  \`,about\` - \`,ping\`
> \`,prefix\`  -  \`,uptime\`

**🟢┇Link**
> [Support](https://discord.gg/DCYsfe4AR6)
> [Invite](https://discord.com/api/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("GREEN");
   message.react("🍀")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
