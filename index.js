const { Client, GatewayIntentBits } = require('discord.js');

// Création du client Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Quand le bot est prêt
client.once('ready', () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

// Réactions aux messages
client.on('messageCreate', message => {
  if (message.content === '/spam') {
    for (let i = 0; i < 5; i++) {
      message.channel.send("bonjour");
    }
  }

  if (message.content === '/help') {
    message.channel.send("📖 Commandes disponibles :\n`/spam` → envoie 5 fois bonjour\n`/help` → affiche ce menu");
  }
});

// Connexion avec le token (stocké dans Railway)
client.login(process.env.TOKEN);
