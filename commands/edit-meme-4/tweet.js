const Command = require('../../structures/Command');
Discord = require("discord.js")
const Meme = require("memer-api");
const memer = new Meme();

module.exports = class TweetCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'tweet',
			aliases: ['tweet', 'twitter-tweet', 'fake-twitter-tweet'],
			group: 'edit-meme-4-4',
			memberName: 'tweet',
			description: 'Sends a Twitter tweet with the user and text of your choice.',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'avatar',
					prompt: 'What user should say the tweet?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				},
				{
					key: 'user',
					prompt: 'Whats this persons twitter name?',
					type: 'string',
				},
				{
					key: 'text',
					prompt: 'What should the text of the tweet be?',
					type: 'string',
					max: 280
				}
			]
		});
	}

	async run(msg, { avatar, user, text }) {
			memer.tweet(avatar, user, text).then(image => {
				//now you have a "BUFFER", for Discord create an attachment
			const attachment = new Discord.MessageAttachment(image, "tweet.png");
			  msg.channel.send(attachment)
			})
		}
};
