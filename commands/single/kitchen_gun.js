const Command = require('../../structures/Command');
const path = require('path');

module.exports = class kitchen_gunCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'kitchen_gun',
			aliases: ['kitchen_gun', 'kitchen-gun', 'kitchengun'],
			group: 'single',
			memberName: 'kitchen_gun',
			description: 'your meme has been approved'
		});
	}

	async run(msg) {
		return msg.say({ files: [path.join(__dirname, '..', '..', 'assets', 'images', 'kitchen_gun.mp4')] });
	}
};
