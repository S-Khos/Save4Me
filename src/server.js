const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const fs = require('fs')
app.use(cors());

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.get('/download', (req, res) => {
  var params = req.query.URL;
  var URL = params.split(',')[0];
  var quality = params.split(',')[2];
  var fileFormat = params.split(',')[1];
  var filenameFormat;

  if (fileFormat === "audioonly") {
    filenameFormat = "mp3";
  } else {
    filenameFormat = "mp4";
  }

  if (fileFormat === "audioonly" && quality === "135") {
    quality = "lowestaudio"
  } else if(fileFormat === "audioonly" && quality === "lowest") {
    quality = "lowestaudio"
  } else if (fileFormat === "audioonly" && quality === "highest") {
    quality = "highestaudio";
  }



  // console.log(params);
  // console.log(URL);
  // console.log(quality);
  // console.log(fileFormat);
  res.header("Content-Disposition", `attachment; filename=video.${filenameFormat}`);
  ytdl(URL, {format: 'audioonly'},{quality: quality}).pipe(res);
});