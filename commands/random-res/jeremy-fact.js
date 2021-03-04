const Command = require('../../structures/Command');
const facts = require('../../assets/json/Jeremy-fact');

module.exports = class JeremyFactCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'jeremy-fact',
			aliases: ['bot-fact', 'easter-egg'],
			group: 'random-res',
			memberName: 'jeremy-fact',
			description: 'Responds with a random fact about Jeremy.'
		});
	}

	run(msg) {
		return msg.say(facts[Math.floor(Math.random() * facts.length)]);
	}
};
