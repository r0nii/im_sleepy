const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '▶️/Play "name"', value: 'Search music by name' },
          { name: '▶️/Playsong normal "link"', value: 'Play youtube link' },
          { name: '⏭️/Skip', value: 'Skip the current playing song' },
          { name: '⏸️/Stop', value: 'Stops the music' },
          { name: '⏸️/Pause', value: 'Pause current playing song' },
          { name: '▶️/Resume', value: 'Resume the current paused song' },
          { name: '🔁/Loop', value: 'Toggle loop' },
          { name: '⏩/Seek', value: 'Seek to a specific time in the current song' },
          { name: '⏮️/Previous', value: 'Play the previous song in the queue' },
          { name: '🔀/Shuffle', value: 'Shuffle the songs in queue' },
          { name: '/Queue', value: 'View and manage the song queue of this server' },
          { name: '/Ping', value: "Check the bot's latency" },
          { name: '/Clear', value: 'Clear the song queue of this server' },
          { name: '/Time', value: 'Display the current song playback time' },
          { name: '/Queue', value: 'View and manage the song queue of this server' }
        )

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Check the bot's latency" },
          { name: '🗑️ Clear', value: 'Clear the song queue of this server' },
          { name: '⏱️ Time', value: 'Display the current song playback time' },
          { name: '🎧 Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: '🎵 Now Playing', value: 'Display the currently playing song information' },
          { name: '🔊 Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
      
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/FUEHs7RCqz')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://replit.com/@BEASTGAMERS1?tab=community')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};
