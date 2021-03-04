const Command = require('../../structures/Command');
const path = require('path');

module.exports = class JeremyJarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'helixjar',
			group: 'single',
			aliases: ['helix-jar', 'helix_jar'],
			memberName: 'helixjar',
			description: 'Responds with a picture of Helix jar.',
			clientPermissions: ['ATTACH_FILES'],
		});
	}

	run(msg) {
		return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', 'helixjar.png')] });
	}
};
