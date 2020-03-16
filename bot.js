const Discord = require('discord.js');
const client = new Discord.Client();
const broadcast = client.voice.createBroadcast();


client.login('Njg2OTYxMDQxNjYxNjI0MzYx.Xm_77Q.ifh4ad4tRwVQBUR4T8MepczoRRg');

client.on("ready",() =>{
    console.log('loli');
});


client.on('message', async message => {

  if (!message.guild) return;

  if (message.content === 'join') {

    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  else if (message.content==='play'){
      if(message.member.voice.channel){
        const connection = await message.member.voice.channel.join();
        const ytdl = require('ytdl-core');
        connection.play(ytdl('https://www.youtube.com/watch?v=8d44ykdKvCw', { filter: 'audioonly' }));


        
    }
  }
});