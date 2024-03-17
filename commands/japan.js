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
    
    let namet=interaction.options.getString('string');
    try {
		const tlumaczony = new String("");
		let zmien = new int(0);
		while( zmien < namet.length() )
		{
			tlumaczony = tlumaczony + "." + namet[zmien];
			zmien++;
		}

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
