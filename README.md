# 👋  Hello there!

This is a wonderful Node.JS module that allows you to fetch the latest statistics for [Vibe Radio](https://viberadio.net) and include them in your project with ease. 

Our API, which this module uses, includes Spotify - meaning that you will always have the most up-to-date song information for what we're playing on-air. 

To get started with the module, simply install it in your project and then include it in your code. Here's an example of how you can get the latest statistics:

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

We will be adding more to the module as the radio station develops, including the ability to get the latest timetable & also the most recently played songs, so keep an eye out!

If you've got any problems, don't hesitate to join our [Discord Server](https://discord.gg/viberadio) if you aren't already in it.