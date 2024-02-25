const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "pause",
  description: "Pauses current music",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue || !queue.playing) {
        return interaction.reply({ content: 'ERROR', ephemeral: true });
      }

      const success = queue.pause();

      const embed = new EmbedBuilder()
        .setColor('#7645fe') 
        .setAuthor({
          name: 'Song paused'
        })
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
