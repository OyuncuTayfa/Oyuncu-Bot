const Discord = require('discord.js');


exports.run = function(client, message) {

    var embed = new Discord.RichEmbed()
    .addField("Deneme : ", "sa" , "as" , "hg" , "hb" , "deneme")
    message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['deneme'],
  permLevel: 0 
};

exports.help = {
  name: 'deneme', 
  description: 'Deneme', 
  usage: 'deneme' 
};
