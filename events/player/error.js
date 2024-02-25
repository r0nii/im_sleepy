module.exports = async (client, textChannel, e) => {
if (textChannel){
   return textChannel?.send(`**An error occured:** ${e.toString().slice(0, 1974)}`)
}
}

