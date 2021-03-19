const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const sayi = args.slice(0).join(' ');


    if(0 > sayi > 100) {
        return message.reply("Lütfen 1 ile 100 arasında bir rakam belirt!")
    }
    
    if(sayi.length < 1) {
        return message.reply("Silmem için bir miktar belirt")
    } else {
    message.channel.bulkDelete(sayi);
    message.channel.send("**" + sayi + "** adet mesaj sildim.").then (msg =>{
        msg.delete("5000")
    });
}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler', 
  usage: 'temizle <miktar>' 
};
