const Command = require('../../structures/Command');
const { createCanvas, loadImage } = require('canvas');
const moment = require('moment');
const request = require('node-superfetch');
const path = require('path');
const { base64, formatNumberK } = require('../../util/Util');
const { wrapText } = require('../../util/Canvas');
const { TWITTER_KEY, TWITTER_SECRET } = process.env;
Discord = require("discord.js")
const Meme = require("meme-api");
memer = new Meme();

module.exports = class TweetCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'tweet',
			aliases: ['fake-tweet', 'twitter-tweet', 'fake-twitter-tweet'],
			group: 'edit-image-2',
			memberName: 'tweet',
			description: 'Sends a Twitter tweet with the user and text of your choice.',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			credit: [
				{
					name: 'Twitter',
					url: 'https://twitter.com/',
					reason: 'Image, API',
					reasonURL: 'https://developer.twitter.com/en/docs.html'
				},
				{
					name: 'Google',
					url: 'https://www.google.com/',
					reason: 'Noto Font',
					reasonURL: 'https://www.google.com/get/noto/'
				}
			],
			args: [
				{
					key: 'user',
					prompt: 'What user should say the tweet? Use the handle, not the name.',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				},
				{
					key: 'text',
					prompt: 'What should the text of the tweet be?',
					type: 'string',
					max: 280
				}
			]
		});

		this.token = null;
	}

	async run(msg, { user, text }) {
		const username = msg.user.username
			memer.tweet(user, username, text).then(image => {
				//now you have a "BUFFER", for Discord create an attachment
			const attachment = new Discord.MessageAttachment(image, "tweet.png");
			  msg.channel.send(attachment)
			})
		}
};
