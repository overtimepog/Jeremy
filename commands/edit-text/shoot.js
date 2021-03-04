const Command = require('../../structures/Command');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const path = require('path');

module.exports = class shootCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'shoot',
			aliases: ['snipe', 'shoot'],
			group: 'edit-text',
			memberName: 'shoot',
			description: 'shoots someone',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'user',
					prompt: 'who is the person you\'re shooting',
					type: 'string',
				}
			]
		});
	}

	async run(msg, { user }) {
		try {
				msg.say(`( ͡° ͜ʖ ͡°) ▄︻̷̿┻̿═━一  ----------------------------------------------------x(${user})`)

		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
