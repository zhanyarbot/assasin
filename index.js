const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login("ODM3MDE2MTUxNzk1NTY0NTQ0.YImaCQ.xg7XHFBpW_hwK8oAUDSI2yp9u9c");
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} MAN GIFS photos  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "baby")) {
    let girl = [
      "https://media.discordapp.net/attachments/699339066029768796/857304174067449877/desconhecido.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302834416582666/Swqly_73.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302774927458345/Swqly_27.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302767730556968/Swqly_65.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302743440818206/Swqly_32.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857272978189975572/davsann.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857229285437472788/taki_babygif50.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857229285089214484/luisa_5.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857191097541459968/854834185234939955.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857177191473217546/image0-29.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857176971213406208/25.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857176970702225408/tenor_1.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "couple")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ❤️  Couple photos  `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "anime")) {
    let girl = [
      "https://media.discordapp.net/attachments/608711485849337856/859555398808633384/3a22e788f70db28cf820d2a060742547.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859555398532464651/31512a46817edd477818277ac60af3ef.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859555398159564820/19629d1b8101f581d5c53369104657c5.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859555397768970270/4471648a09239bf326e26ebf38a47eda.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859551886159904798/giphy.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542765116981278/SPOILER_1548244985_tumblr_oehosoYb6i1qg9t1lo2_400.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542756254679090/SPOILER_2f46a27d-f14c-4733-8178-24d03ef093e9.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542719339429938/44d0f1339059de50f411ba1c2f0b4d3a.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542602462527488/20210611_182625.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859535363534225418/image0.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859534450152701992/20210526_192740.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859534195012272179/4fc7dc8db47f29569f6298785bb32449a3c9615e_00.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ANIME GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "cartoon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755169627872428134/859514371474325505/tenor_7.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859513072615424010/image0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859512883990102056/image0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859512805753487370/image0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859475938159624192/itachi.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859473817709576242/6e782a5ae0b44f52bf867f361e73c26a.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859387230149148672/pp8.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859386157883064360/a_a79974a9a389ea9245ce7e5153223993.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859379700832534528/g0yPLFTYpr283dUJBs.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859371320626118656/de9o2kn-d29293c2-4ea7-4010-9c7b-df6a39c39044.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859313579525275668/3fcf62b03e920a47f7e836ee87834474.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859313527361634314/original.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} CARTOON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "cat")) {
    let girl = [
      "https://media.discordapp.net/attachments/608711488806584330/859501211283095562/21.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859450818591981578/Zeyrox_34.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859419911746486312/image0.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279253065564180/a_5e45be6109ee8d19b1faf07d3578cae7.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279222992273418/Animal-5.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279207862763530/a_1f88d9d0fc7c274035b4a11d71b3072f.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279197976133642/21313.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279171376119848/21.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279151918612530/Lavinia_13.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279140753637376/kedicipsi.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279067835793408/a_52d9412f3d92c45604415c34847a82d3.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279030825779220/aureliongif4.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} CAT GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on(`ready`, () => {	
//////////////

////////
   
   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      
    client.user.setActivity(`Type: ${PREFIX}help - Qeqe`, { type: "PLAYING"});
    client.user.setActivity(`Type: ${PREFIX}help | ${client.guilds.cache.size} Server,Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "PLAYING"});
   
  
      }, (5000));
      ////////////////////////////////
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("PURPLE").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({dynamic:true})));
  } 


//An about announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}about`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setAuthor("About Qeqe Bot.", "https://cdn.discordapp.com/avatars/837016151795564544/6813aeeea7e579ff5666bc9e902cb4c2.png?size=1024")
    .setThumbnail(`https://cdn.discordapp.com/avatars/837016151795564544/6813aeeea7e579ff5666bc9e902cb4c2.png?size=1024 `)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

[Support](https://discord.gg/6MGtNxJNBk)

[Invite](https://discord.com/api/oauth2/authorize?client_id=837016151795564544&permissions=8&scope=bot)

**{Owner Bot}** :
Miro#4801

**{Set Status}** :
Online

**{Time Create}** :
28/4/2021

**{Prefix Bot}** :
*

`)

    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:822203026776391711>")
  } 

//An suuport announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}support`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setDescription (`
 

[Support](https://discord.gg/6MGtNxJNBk)
-
[Invite](https://discord.com/api/oauth2/authorize?client_id=837016151795564544&permissions=8&scope=bot)`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setImage(``)
    .setTitle(`**Support  QEQE**`) 
    .setThumbnail(`https://cdn.discordapp.com/avatars/837016151795564544/6813aeeea7e579ff5666bc9e902cb4c2.png?size=1024 `)
    .setTimestamp()
    
    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:822203026776391711>")
  }

//client.on("guildCreate" , AQUAMAN => {
 // if(AQUAMAN.memberCount < 200){
   // console.log(`  name ( ${AQUAMAN.name} ) zhmaray memberakan ( ${AQUAMAN.memberCount}) created by AQUAMAN`)//by AQUAMAN
  //  AQUAMAN.leave();
//  }
//})

  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setDescription(saymsg)
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }


//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("PURPLE")
      .setTitle(`<:emoji_4:822203026776391711>\`Please wait\` \`${timeLeft.toFixed(1)} seconds\` \`before reusing the\` \`${prefix}${command.name}\` `)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("PURPLE")
   .setTitle(`There was an error executing that command.`)).catch(console.error);
 }

 });
  
 client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("856109396492419073");
  let embed = new MessageEmbed().setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✅ Join Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("856109396492419073");
  let embed = new MessageEmbed()
  .setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}

//Bot coded by Aquaman#5186 
