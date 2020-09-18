const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"**YAZI-TURA:__TURA__**",
	"**YAZI-TURA:__YAZI__**"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "**YAZI-TURA:__YAZI__**") {
		
		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1TL_obverse.png/199px-1TL_obverse.png")
		message.channel.send(embedyazı);
		
	} else if (cevap === "**YAZI-TURA:__TURA__**") {
		
		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSczdZXv4B6JLrGS8j7Fvo_rmAYIIhmAjJ4A&usqp=CAU")
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
