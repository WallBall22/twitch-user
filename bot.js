const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

const prefix = "$"
var adminprefix = '!'
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '441316969870786581') return;

if (message.content.startsWith(prefix + 'g')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(**✅  : ${argresult}**)
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(**✅  : ${argresult}**)
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(**✅  : ${argresult}**)
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(**✅  : ${argresult}**)
}
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(Changing The Name To ..**${argresult}**)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(Changing The Avatar To :**${argresult}**);
  }
});

client.login("token");
