const ytdl = require('ytdl-core');
const fs = require('fs');
ytdl('https://youtu.be/BGiWL_2jaPE')
  .pipe(fs.createWriteStream('src/assets/videos/prenatal-yoga-video-yt.mp4'))
  .on('finish', () => console.log('Downloaded'));
