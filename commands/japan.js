const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
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
    
    //pobieram podana opcje do zmiennej namet
    let namet=interaction.options.getString('string');
    //tworze slownik do tlumaczenia  cheat_sheet, gdzie 'a' = cheat_sheet[0], 'b' = cheat_sheet[1], etc...
    const String cheat_sheet[] = {"ka", "zu", "mi", "te", "ku", "lu", "Ji", "Ri", "Ki", "ZU","me", "Ta", "Rin", "To", "Mo", "NO", "ke", "shi", "Ari", "chi", "do", "ru", "mei", "Na", "fu", "z"}; 
    try {
		const tlumaczony = new String("");
		//uposledzone for( int zmienna = 0 ; zmienna< namet.length() ; zmienna ++ ), moze "for_each"
		let zmien = new int(0);
		//dla kazdego znaku w tlumaczonym slowie...
		while( zmien < namet.length() )
		{
			char tmp = namet[i];
			//ustalam ze duze litery tlumacze tak samo jak male
			if(tmp >= 'A' && tmp <= 'Z')
			{
				tmp = (tmp - 'A') + 'a';
			}
			//sprawdzam czy znak to litera
			if(tmp >= 'a' && tmp <= 'z')
				tlumaczony = tlumaczony + cheat__sheet[tmp-'a'];
			//jesli nie to nie zmieniam
			else
				tlumaczony = tlumaczony +  tmp;
			//ide do nastepnego znaku
			zmien++;
		}

	//jakas odpowiedz 
  const embed = new EmbedBuilder()
    .setColor('#3498db')
    .setAuthor({
      name: 'translating',
    })
    .setDescription(` before translation : **${namet}**, after **${tlumaczony}**`);

  return interaction.reply({ embeds: [embed] });


    } catch (e) {
    console.error(e); 
  }
  },
};
