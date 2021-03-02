const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const cevaplar = [':fist:',':raised_hand:',':v:'];

exports.run = function(client, message, args) {

    const cevap = args.slice(0).join(' ');

	var cevap1 = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    if (!cevap) return message.reply('Lütfen bir sembol seç. **Doğru Kullanım** : -tkm <:fist:,:raised_hand:,:v:>')
if (cevap === ':raised_hand:') {
	
} else if (cevap === ':fist:') {

} else if (cevap === ':v:') {

} else message.reply('Lütfen **geçerli** bir sembol seç. **Doğru Kullanım** : -tkm <:fist:,:raised_hand:,:v:>')

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['tkm'],
  permLevel: 0
};

exports.help = {
  name: 'taşkağıtmakas', 
  description: 'Taş Kağıt Makas oyunu oynatır. (Bakımda)',
  usage: 'taşkağıtmakas'
};





//message.channel.send(stripIndents`
//     __SEN__  __BEN__
//    ${cevap} : ${cevap1}
//    `)
//	if (cevap === cevap1) {
//		message.channel.send(stripIndents`
//         __SEN__   __BEN__
//        ${cevap} : ${cevap1}
//		Eyvah Berabere Kaldık.
//		`); 
//	} else if (cevap === ':v:' && cevap1 === ':hand_splayed:') {
//        message.channel.send(stripIndents`
//         __SEN__   __BEN__
//        ${cevap} : ${cevap1}
//        Makas Kağıdı keser sen kazandın.
//		`);	
//	}
