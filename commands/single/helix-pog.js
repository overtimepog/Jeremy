const Command = require('../../structures/Command');
const path = require('path');

module.exports = class JeremypogCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'helixpog',
			aliases: ['helix-pog', 'helixpog'],
			group: 'single',
			memberName: 'helix',
			description: 'sends Helix pog',
			clientPermissions: ['ATTACH_FILES']
		});
	}

	run(msg) {
		return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', 'helix-pog.png')] });
	}
};
