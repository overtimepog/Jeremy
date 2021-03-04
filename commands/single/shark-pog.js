const Command = require('../../structures/Command');
const path = require('path');

module.exports = class SharkPogCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'shark-pog',
			group: 'single',
			memberName: 'shark-pog',
			aliases: ['shark_pog', 'shark-pog', 'sharkpog'],
			description: 'shark-pog',
			clientPermissions: ['ATTACH_FILES']
		});
	}

	run(msg) {
		return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', 'shark-pog.mp4')] });
	}
};
