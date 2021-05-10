const Command = require('../../structures/Command');
const { MersenneTwister19937, integer } = require('random-js');
const { MessageEmbed } = require('discord.js');

module.exports = class ppCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pp',
			aliases: ['pp-size', 'penis', 'penis-size', 'pee-pee', 'pee-pee-size', 'cock', 'cock-size'],
			group: 'random-seed',
			memberName: 'pp',
			description: 'Determines your pp size.',
			args: [
				{
					key: 'user',
					prompt: 'What user do you want to determine the pp size of?',
					type: 'user',
					default: msg => msg.author
				}
			]
		});
	}

	run(msg, { user }) {
		const embed1 = new MessageEmbed()
				.setColor(0x7CFC00)
				.setTitle('pp size machine')
				.addField(`${user.tag}'s pp size`, `8${'='.repeat(50)}D`)
		if (this.client.isOwner(user)) {
			if (user.id === msg.author.id) return msg.say(embed1);
			else msg.say(embed1)
		}
		const clientAuthor = user.id === this.client.user.id;
		const random = MersenneTwister19937.seed(clientAuthor ? msg.author.id : user.id);
		const length = integer(0, 50)(random);
		const embed2 = new MessageEmbed()
		.setColor(0x7CFC00)
		.setTitle('pp size machine')
		.addField(`${user.tag}'s pp size`, `8${'='.repeat(clientAuthor ? length + 1 : length)}D`)
		return msg.say(embed2);

	}
};
