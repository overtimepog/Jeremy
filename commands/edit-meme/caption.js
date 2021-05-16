const Command = require('../../structures/Command');

module.exports = class CaptionCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'caption',
			group: 'edit-meme',
			memberName: 'caption',
			description: 'Sends a meme with the text and image of your choice.',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			credit: [
				{
					name: 'Google',
					url: 'https://www.google.com/',
					reason: 'Noto Font',
					reasonURL: 'https://www.google.com/get/noto/'
				}
			]
		});
	}

	async run(bot, msg, args, rawArgs) {
		};
	}
