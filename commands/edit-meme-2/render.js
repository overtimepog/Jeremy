const Command = require('../../structures/Command');

module.exports = class RenderCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'render',
			group: 'edit-meme-2-2',
			memberName: 'render',
			description: 'renders discord conversations as Ace Attorney conversations',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			credit: [
				{
					name: 'LuisMayo',
					url: 'https://github.com/LuisMayo/',
					reason: 'Images, Original "Ace Attorney" bot',
					reasonURL: 'https://github.com/LuisMayo/ace-attorney-discord-bot'
				}
			]
		});
	}

	async run(msg, { character }) {
	}
};
