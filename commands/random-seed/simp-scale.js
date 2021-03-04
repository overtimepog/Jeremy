const Command = require('../../structures/Command');
const { MersenneTwister19937, integer } = require('random-js');

module.exports = class SimpScaleCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'simp-scale',
			aliases: ['simp-scale', 'simpscale', 'simp_scale', 'simp-rate', 'simp_rate', 'simprate'],
			group: 'random-seed',
			memberName: 'simp-scale',
			description: 'Determines a user\'s place on the simp scale',
			args: [
				{
					key: 'user',
					prompt: 'Which user do you want me to get the simp scale of?',
					type: 'user',
					default: msg => msg.author
				}
			]
		});
	}

	run(msg, { user }) {
		const authorUser = user.id === msg.author.id;
		if (user.id === this.client.user.id) return msg.reply('Me? Nah m8 I aint no simp');
		if (this.client.isOwner(user)) {
			if (authorUser) return msg.reply('I cant really tell with you');
			return msg.reply(`${user.username}, That guy... yeah massive simp`);
		}
		const random = MersenneTwister19937.seed(user.id);
		const score = integer(1, 100)(random);
		return msg.reply(`${authorUser ? 'You\'re' : `${user.username}`} simp scale % is **${score}%**`);
	}
};
