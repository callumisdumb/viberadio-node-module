# 📻 Vibe Radio package
![Contributors](https://shields.io/github/contributors/viberadionet/node-module)
![License](https://shields.io/github/license/viberadionet/node-module)

This is a wonderful Node.JS module that allows you to fetch the latest statistics for [Vibe Radio](https://viberadio.net) and include them in your project with ease. 

Our API, which this module uses, includes Spotify - meaning that you will always have the most up-to-date song information for what we're playing on-air. 

## Working Examples

> Code
```js
const Vibe = require("viberadio");

Vibe.fetchStats()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

> Response
```
{
  presenter: {
    name: 'Fly',
    avatar: 'https://viberadio.net/splash/avatars/Fly.png'
  },
  song: {
    title: 'House Every Weekend (Radio Edit)',
    artist: 'David Zowie',
    covers: {
      big: 'https://media.discordapp.net/attachments/1103776409756909608/1105194888112373871/4b99bf433378f7f77b79d65fb391baf1.png?size=1024'
    }
  },
  listeners: 4,
  stream: 'https://viberadio.net'
}
```

> **Note**: We will be adding more to the module as the radio station develops, including the ability to get the latest timetable & also the most recently played songs, so keep an eye out!

## Package support

If you've got any problems, don't hesitate to join our [Discord Server](https://discord.gg/viberadio) if you aren't already in it.