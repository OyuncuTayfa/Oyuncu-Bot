const Discord = require('discord.js');


exports.run = function(client, message) {
    var kisi = args.join(' ');
    const user = message.mentions.users.first();
    if(!kisi)
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setImage(message.author.avatarURL)
        message.channel.send(embed);
    else if 
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatarım'],
  permLevel: 4 
};

exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı gösterir', 
  usage: 'avatar' 
};
