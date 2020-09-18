const Discord = require('discord.js');


exports.run = function(client, message, args) {

  var öneri = args.slice(0).join(' ');
  var guildID = "499546891843928064";
  var channelID = "756494706510135307";
  var kullanici = message.author
  
  if(!öneri){
    return message.reply('Bir mesaj belirtin! **Doğru Kullanım**: -öneri <mesaj>');
  } else{
    client.guilds.get(guildID).channels.get(channelID).send(kullanici + öneri);
  };
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri"],
  permLevel: 0
};

exports.help = {
  name: 'öneri', 
  description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır",
  usage: 'öneri <mesaj>'
};
