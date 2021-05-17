const Command = require('../../structures/Command');
const Meme = require("memer-api");
const memer = new Meme();

module.exports = class DisabilityCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'disability',
			aliases: ['disabled'],
			group: 'edit-meme-2-2',
			memberName: 'disability',
			description: 'lol ur disabled',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who is disabled?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        memer.disability(image).then(img => {
      	const attachment = new Discord.MessageAttachment(img, "disability.png");
      	msg.channel.send(attachment)
		})
	}
};
