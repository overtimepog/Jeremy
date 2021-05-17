const Command = require('../../structures/Command');
const Meme = require("memer-api");
const memer = new Meme();

module.exports = class failureCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'failure',
			group: 'edit-meme-2-2',
			memberName: 'failure',
			description: 'you\'re a failure',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who is the failure?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        memer.failure(image).then(img => {
      	const attachment = new Discord.MessageAttachment(img, "failure.png");
      	msg.channel.send(attachment)
		})
	}
};
