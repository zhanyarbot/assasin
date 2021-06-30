client.on('message',function(message) {
 
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(PREFIX + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`);
}
});
