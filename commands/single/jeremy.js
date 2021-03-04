const Command = require('../../structures/Command');
const path = require('path');

module.exports = class JeremyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'jeremy',
			group: 'single',
			memberName: 'jeremy',
			aliases: ['me'],
			description: 'Responds with a picture of me, jeremy',
			clientPermissions: ['ATTACH_FILES'],
		});
	}

	run(msg) {
		return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', 'jeremy.png')] });
	}
};
