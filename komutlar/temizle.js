const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const sayi = args.slice(0).join(' ');


    if(sayi.length < 1) {
        return message.reply("Silmem için bir miktar belirt")
    } else {
    message.channel.bulkDelete(sayi);
    message.channel.send("**" + sayi + "** adet mesaj sildim. https://images-ext-1.discordapp.net/external/5DwLF5ijD2kgBZg-LXYQCu2ZrDdUmLYpDH71cM_jO24/https/cdn.pixabay.com/photo/2012/04/11/17/24/cleaning-29040_960_720.png").then (msg =>{
        msg.delete("5000")
    });
}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler', 
  usage: 'temizle <miktar>' 
};
