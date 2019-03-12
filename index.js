const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = 'p!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.reply('The bot prefix is **p!** and here are the commands: **ip, website, store**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'ip') {
    msg.reply('The IP is **PiratesHCF.club**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'website') {
    msg.reply('The Website is **https://piratehcf.enjin.com**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'store') {
    msg.reply('The Website is **https://piratehcf.buycraft.net**');
  }
});

client.login(process.env.BOT_TOKEN);
