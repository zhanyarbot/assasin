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
<a<a:emoji_30:861768375792566272>861768375792566272>\`,lock\`  -  \`,unlock\`  -  \`,clear\`  -  \`,kick\`
<a<a:emoji_30:861768375792566272>861768375792566272>\`,ban\`  -  \`,unban\`  -  \`,sug\`


**__Funny__**
<a<a:emoji_83:875554071631757385>875554071631757385>\`,slap\`  -   \`,kiss\`  -  \`,hug\`


**__Gif__**
<a<a:emoji_26:861768220776333362>861768220776333362>\`,boy\`   -   \`,girl\`   -  \`,baby\`  -  \`,couple\`
<a<a:emoji_26:861768220776333362>861768220776333362>\`,anime\`  -  \`,cat\`  -  \`,cartoon\`  -  \`,smoke\`
<a<a:emoji_26:861768220776333362>861768220776333362>\`,sad\`  -  \`,neon\`


**__Music__**
<a<a:emoji_82:875552188749983815>875552188749983815>\`,play\`  -  \`,skip\`  -  \`,skipto\`  -  \`,stop\`  
<a<a:emoji_82:875552188749983815>875552188749983815>\`,volume\`  -  \`,nowplaying\`  -  \`,shuffle\`
<a<a:emoji_82:875552188749983815>875552188749983815>\`,search\`  -  \`,resume\`  -  \`,remove\`
<a<a:emoji_82:875552188749983815>875552188749983815>\`,queue\`  -  \`,loop\`  -  \`,lyrics\`  -  \`,radio\`


**__Everyone__**
<a<a:emoji_74:865927465377202196>865927465377202196>\`,invite\`  -  \`,support\`  -  \`,about\`  -  \`,ping\`
<a<a:emoji_74:865927465377202196>865927465377202196>\`,prefix\`  -  \`,uptime\`


[Support](https://discord.gg/DCYsfe4AR6)
[Invite](https://discord.com/api/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
