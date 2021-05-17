const Command = require('../../structures/Command');
Discord = require("discord.js")
const Meme = require("memer-api");
const memer = new Meme();

module.exports = class YoutubeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'youtube',
			aliases: ['youtube', 'youtube-comment', 'comment', 'yt', 'yt-comment'],
			group: 'edit-meme-4',
			memberName: 'youtube',
			description: 'Sends a youtube comment with the user and text of your choice.',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'avatar',
					prompt: 'What user should write the comment?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				},
				{
					key: 'user',
					prompt: 'Whats this persons youtube name?',
					type: 'string',
				},
				{
					key: 'text',
					prompt: 'What should the text of the youtube be?',
					type: 'string',
					max: 280
				}
			]
		});
	}

	async run(msg, { avatar, user, text }) {
			memer.youtube(avatar, user, text).then(image => {
				//now you have a "BUFFER", for Discord create an attachment
			const attachment = new Discord.MessageAttachment(image, "youtube.png");
			  msg.channel.send(attachment)
			})
		}
};
