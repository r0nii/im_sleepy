const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
function translate_to_japan(words_to_translate)
{
	//if(typeof worlds_to_translate != typeof String )
	//throw "translate_to_japan(String) error: given argument is not a" + typeof(String) +", but " + typeof(worlds_to_translate) ;
	console.log("a");
	console.log(words_to_translate);
	 const cheat_sheet = ["ka", "zu", "mi", "te", "ku", "lu", "Ji", "Ri", "Ki", "ZU", "me", "Ta", "Rin", "To", "Mo", "NO", "ke", "shi", "Ari", "chi", "do", "ru", "mei", "Na", "fu", "z"];
	    let tlumaczony = "";
	 [...words_to_translate].forEach(character => {
	        let tmp = character.charCodeAt(0);
			//ustalam ze duze litery tlumacze tak samo jak male
	        if(tmp >= 'A'.charCodeAt(0) && tmp <= 'Z'.charCodeAt(0))
	            tmp = (tmp - 'A'.charCodeAt(0)) + 'a'.charCodeAt(0);
			//sprawdzam czy znak to litera
			if(tmp >= 'a'.charCodeAt(0) && tmp <= 'z'.charCodeAt(0)){
				tlumaczony = tlumaczony + cheat_sheet[tmp-'a'.charCodeAt(0)];
			    console.log(tmp-'a'.charCodeAt(0));
			    
			}
			//jesli nie to nie zmieniam
			else
				tlumaczony = tlumaczony + tmp;
	 }
	 )
	 return tlumaczony;
}

module.exports = {
  name: "japan",
  description: "translates to japan",
  permissions: "0x0000000000000800",
  options: [{
    name: "string",
    description: "thing to translate",
    type: ApplicationCommandOptionType.String,
    required: true
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    
   let tlumaczony = translate_to_japan(interaction.options.getString('string'));
	//jakas odpowiedz 
  const embed = new EmbedBuilder()
    .setColor('#3498db')
    .setAuthor({
      name: 'translating',
    })
    .setDescription(` after translation **${tlumaczony}**`);

  return interaction.reply({ embeds: [embed] });


    } catch (e) {
    console.error(e); 
  }
  },
};
