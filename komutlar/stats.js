const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')

exports.run = function(client, message, args) {
  module.exports = {
    kod: "stats",
    {
    const embed = new MessageEmbed() 
    .setTitle('İstatistik')
    .addField('Kullanıcı Sayısı', client.users.cache.size)
    .addField('Sunucu Sayısı', client.guilds.cache.size)
    .addField('Kanal Sayısı', client.channels.cache.size)
    message.channel.send(embed)
  };
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['stats'],
  permLevel: 0 
};

exports.help = {
  name: 'stats', 
  description: 'Bot ile ilgili istatistikleri gösterir.', 
  usage: 'stats' 
};
