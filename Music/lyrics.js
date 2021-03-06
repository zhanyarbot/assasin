////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "lyrics",
  aliases: ["ly", "text"],
  description: "(ly)Get lyrics for the currently playing song",
  cooldown: 7.5,
  edesc: `Type the Command while listening to a song, to get the lyrics from!\nUsage: ${PREFIX}lyrics`,

async execute(message) {
    //if not in a Guild return
    if(!message.guild) return;
    //react with approve emoji
    message.react("<:emoji_4:822203026776391711>").catch(console.error);
    //Get the current Queue
    const queue = message.client.queue.get(message.guild.id);
    //If no Queue Error
    if (!queue) return attentionembed(message, "There is nothing playing");
    //If not in a VOICE
    if (!canModifyQueue(message.member)) return;
    //Set lyrics to null for the try catch
    let lyrics = null;
    //define the temporary Embed
    let temEmbed = new MessageEmbed()
    .setAuthor("Searching...", "").setFooter("Lyrics")
    .setColor("83c0ff")
    //send it and safe it in a variable
    let result = await message.channel.send(temEmbed)
    //try to find lyrics
    try {
      //use lyricsfinder
      lyrics = await lyricsFinder(queue.songs[0].title,"");
      //If no Lyrics define no lyrics
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}.`;
    }
    //catch any error
    catch (error) {
      lyrics = `No lyrics found for ${queue.songs[0].title}.`;
    }
    //define lyrics Embed
    let lyricsEmbed = new MessageEmbed()
      .setTitle("🌐 Lyrics")
      .setDescription(lyrics)
      .setColor("GREEN")
    //if to long make slice it
    if (lyricsEmbed.description.length >= 2048)
      //slice the embed description and redefine it
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
      //edit to approve
    return result.edit(lyricsEmbed).catch(console.error);
  }
};
