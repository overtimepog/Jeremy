const Command = require('../../structures/Command');
const { formatNumber } = require('../../util/Util');

module.exports = class bobuxCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bobux',
			group: 'edit-number',
			memberName: 'bobux',
			description: 'Converts Bobux to USD',
			credit: [
				{
					name: 'Duhon',
					url: 'https://bobuxconverter.netlify.app/',
					reason: 'Math involved'
				}
			],
			args: [
				{
					key: 'amount',
					prompt: 'How much will you spend on bobux?',
					type: 'integer'
				}
			]
		});
	}

	run(msg, { amount }) {
		const result = amount / 23959;
		return msg.say(`$${amount} USD = ${ formatNumber(result, 10)} Bobux`);
	}
};
