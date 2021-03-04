const Command = require('../../structures/Command');
const path = require('path');

module.exports = class SpyPetCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'spy-pet',
			group: 'single',
			aliases: ['spy_pet', 'spy-pet', 'spypet', 'pet_spy', 'pet-spy', 'petspy'],
			memberName: 'spy-pet',
			description: 'Responds with a video of spy pet.',
			clientPermissions: ['ATTACH_FILES'],
		});
	}

	run(msg) {
		return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', 'spypet.mp4')] });
	}
};
