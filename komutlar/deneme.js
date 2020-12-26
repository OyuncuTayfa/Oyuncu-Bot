const Discord = require('discord.js');


exports.run = function(client, message) {

    var embed = new Discord.RichEmbed()
    .setColor(0xffd700)
    .addField("Deneme", "sa")
    .addField("as" , "hg")
    .addField("hb" , "deneme")
    message.channel.send(embed);
};

exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['deneme'],
  permLevel: 0 
};

exports.help = {
  name: 'deneme', 
  description: 'Deneme', 
  usage: 'deneme' 
};
