const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')

exports.run = function(client, message, args) {
  var stat = args.slice(0).join(' ');
  
  module.exports = {
    kod: "stats",
    if(_stat = 'all') {
    var embed = new Discord.RichEmbed() 
      .setTitle('İstatistik')
      .addField('Kullanıcı Sayısı', client.users.cache.size)
      .addField('Sunucu Sayısı', client.guilds.cache.size)
      .addField('Kanal Sayısı', client.channels.cache.size)
    message.channel.send(embed)
    },
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['stats'],
  permLevel: 4 
};

exports.help = {
  name: 'stats', 
  description: 'Bot ile ilgili istatistikleri gösterir. (Bakımda)', 
  usage: 'stats' 
};
