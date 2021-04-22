const Discord = require('discord.js');


exports.run = function(client, message, args) {
    var kisi = args.join(' ');
    const user = message.mentions.users.first();
    if(!kisi) {
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setImage(message.author.avatarURL)
        message.channel.send(embed);
    } else if (user) {
        const member = message.guild.member(user);
        
        if(member) {
            var embedd = new Discord.RichEmbed()
                .setAuthor(user.tag)
                .setImage(user.avatarURL)
            message.channel.send(embedd);
        }
    }
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatarım'],
  permLevel: 0 
};

exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı gösterir', 
  usage: 'avatar' 
};
