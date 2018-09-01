const DiscordRPC = require("discord-rpc");

const ClientId = '#';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("running");
  rpc.setActivity({

      details: `Adobe Premiere Pro CC`,
      state: 'Project: Splatoon Salmon Run Video',
        largeImageKey: 'premiere',
        largeImageText: 'Adobe Premiere Pro CC',
  /*

      details: `Adobe After Effects CC`,
      state: 'Project: Splatoon FX',
        largeImageKey: 'after-effects',
        largeImageText: 'Adobe After Effects CC',

      details: `Adobe Photoshop CC`,
      state: 'Project: Thumbnail',
        largeImageKey: 'photoshop',
        largeImageText: 'Adobe Photoshop CC',

      details: `Adobe Illustrator CC`,
      state: 'Project: Some Vectors',
        largeImageKey: 'illustrator',
        largeImageText: 'Adobe Illustrator CC',
*/

        smallImageKey: 'green-button',
      instance: false,
  });
});

rpc.login(ClientId).catch(console.error);
