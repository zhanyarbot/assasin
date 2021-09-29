console.error(error);
        return attentionembed(message, error.message);
      }
    }
    else {
      try {
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        console.error(error);
        return attentionembed(message, error);
      }
    }
    let thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png"
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
    else thumb = song.thumbnail.url;
    if (serverQueue) {
      let estimatedtime = Number(0);
      for (let i = 0; i < serverQueue.songs.length; i++) {
        let minutes = serverQueue.songs[i].duration.split(":")[0];
        let seconds = serverQueue.songs[i].duration.split(":")[1];
        estimatedtime += (Number(minutes)*60+Number(seconds));
      }
      if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Minutes"
      }
      else if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Hours"
      }
      else {
        estimatedtime = estimatedtime + " Seconds"
      }
serverQueue.songs.push(song);
      const newsong = new MessageEmbed()
        .setTitle(" "+song.title)
        .setURL(song.url)
        .setColor("GREEN")
        .setImage(thumb)
        .setThumbnail(https://images-ext-2.discordapp.net/external/sgK9ggHfs-bLZHFzmiOg9V6pw5w0qsW4sN00kU4qMtQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/807350534901071932/b25a811f2d1306df4c30e34e302bd6c7.png )
         .addField("> Requested by:", \${message.author.username}#${message.author.discriminator}\``, true)
        .addField("> Length:", \${song.duration} Minutes\``, true)
        .addField("> Volume:", \100\``, true)
        .addField("> Position in queue:", **\${serverQueue.songs.length - 1}\**, true)
        return serverQueue.textChannel
        .send(newsong)
        .catch(console.error);

    }
  //////////////////////////////////////////////////////////////////////////
    queueConstruct.songs.push(song);
    message.client.queue.set(message.guild.id, queueConstruct);
    try {
      play(queueConstruct.songs[0], message, client);
    } catch (error) {
      console.error(error);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return attentionembed(message, Could not join the channel: ${error});
    }
  }
};
  //////////////////////////////////////////////////////////////////////////
