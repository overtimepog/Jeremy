const Command = require('../../structures/Command');
const Meme = require("memer-api");
const memer = new Meme("M1blMbF8ds8");
const Discord = require("discord.js")

module.exports = class ByeMomCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'byemom',
			group: 'edit-meme',
			memberName: 'byemom',
			description: 'bye mom, cya',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'avatar',
					prompt: 'who is saying bye?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				},
				{
					key: 'username',
					prompt: 'whats their name?',
					type: 'string',
					default: msg => msg.author.username
				},
				{
					key: 'text',
					prompt: 'what are they searching?',
					type: 'string'
				},

			]
		});
	}

	async run(msg, { avatar, username, text }) {
		memer.byemom(avatar, username, text).then(image => {
		const attachment = new Discord.MessageAttachment(image, "byemom.png");
      	msg.channel.send(attachment)
		})
	}
};
