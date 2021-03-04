const Command = require('../../structures/Command');

module.exports = class HornyJailCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hornyjail',
			aliases: ['hornyjail', 'horny-jail'],
			group: 'single',
			memberName: 'hornyjail',
			description: 'sends somebody to horny jail',
			credit: [
				{
					name: 'Tylko#0912',
					reason: 'Building the Portal',
				}
			]
		});
	}

	run(msg) {
		return msg.say('https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755');
	}
};
