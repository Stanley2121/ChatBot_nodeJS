const TelegramBot = require('node-telegram-bot-api');

// replace 'TOKEN_DO_YOUR_BOT' with the token you received from BotFather
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

// Replace 'YOUR_CHANNEL_ID' with the ID of the channel you want to send messages to
const channelId = 'YOUR_CHANNEL_ID';

// Function to send the daily message
function sendMessage() {
    const message = 'Hello, World!';
    bot.sendMessage(channelId, message);
}

// calling the function to send the message
sendMessage();