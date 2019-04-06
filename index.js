const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.reply('The bot prefix is **!** and here are the commands: **IP, Website, Store, and Apply**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'ip') {
    msg.reply('The IP is **play.piratesmc.club**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'website') {
    msg.reply('The Website is **http://www.piratesmc.club**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'store') {
    msg.reply('The Website is **http://store.piratesmc.club**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'apply') {
    msg.reply('Apply at **http://www.piratesmc.club**');
  }
});

client.login(process.env.BOT_TOKEN);
