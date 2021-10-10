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
    .setImage(`https://media.discordapp.net/attachments/884766231113125919/896547229018509392/image0.jpg `)
    .setTitle(`**Green Bot**`)
    .setDescription(`

**☘️┇Everyone**
\`,invite\`  -  \`,support\`  -  \`,about\`
\`,prefix\`  -  \`,uptime\`  -  \`,ping\`

**📗┇Moderator**
\`,lock\`  -  \`,unlock\`  -  \`,clear\`  -  \`,kick\`
\`,ban\`  -  \`,unban\`  -  \`,sug\`

**💚┇Gif**
\`,boy\`  -  \`,girl\`  -  \`,baby\`  -  \`,couple\`
\`,anime\`  -  \`,cat\`  -  \`,cartoon\`  -  \`,smoke\`
\`,sad\`  -  \`,neon\`

**🐲┇Music**
\`,play\`  -  \`,skip\`  -  \`,skipto\`  -  \`,stop\`  
\`,volume\`  -  \`,nowplaying\`  -  \`,shuffle\`
\`,search\`  -  \`,resume\`  -  \`,remove\`
\`,queue\`  -  \`,loop\`  -  \`,lyrics\`  -  \`,radio\`

**🐸┇Funny**
\`,slap\`  -  \`,kiss\`  -  \`,hug\`

**♻️┇Link**
[Support](https://discord.gg/DCYsfe4AR6)
[Invite](https://discord.com/api/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot)

`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#2ecc71")
   message.react("🍀")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
