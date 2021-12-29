const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const fs = require('fs')
const youtubedl = require('youtube-dl')

app.use(cors());

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.get('/download', (req, res) => {
  var params = req.query.URL;
  var URL = params.split(',')[0];
  var quality = params.split(',')[2];
  var format = params.split(',')[1];
  console.log(params);
  console.log(URL);
  console.log(quality);
  console.log(format);

  res.header("Content-Disposition", `attachment; filename=${URL}.${format}`);
  
  // ytdl(URL,{
  //   format: `${format}`
  // }).pipe(res);

//----------------------------------------------------------------------------------------------------------------------
  const video = youtubedl(URL,
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // [`-f ${format}`],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname })

  // Will be called when the download starts.
  video.on('info', function(info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
  })

  video.pipe(fs.createWriteStream('myvideo.mp4'));

//----------------------------------------------------------------------------------------------------------------------

});