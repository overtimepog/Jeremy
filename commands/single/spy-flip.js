const Command = require('../../structures/Command');
const path = require('path');

module.exports = class SpyFlipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'spy-flip',
			group: 'single',
			memberName: 'spy-flip',
			aliases: ['spy_flip', 'spy-flip', 'spyflip', 'flip_spy', 'flip-spy', 'flipspy'],
			description: 'spy-flip',
			clientPermissions: ['ATTACH_FILES']
		});
	}

	run(msg) {
		return msg.say('https://tenor.com/view/tf2-heavy-is-dead-spy-antoine-delak-gif-15144264');
	}
};
