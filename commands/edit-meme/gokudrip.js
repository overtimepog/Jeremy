const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const request = require('node-superfetch');
const { shortenText } = require('../../util/Canvas');
const { wrapText } = require('../../util/Canvas');
const { ReactionUserManager } = require('discord.js');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Regular.ttf'), { family: 'Noto' });

module.exports = class gokudripCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'gokudrip',
			group: 'edit-meme',
			aliases: ['drip'],
			memberName: 'gokudrip',
			description: 'Sends a gokudrip meme',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			credit: [
				{
					name: 'Google',
					url: 'https://www.google.com/',
					reason: 'Noto Font',
					reasonURL: 'https://www.google.com/get/noto/'
				}
			],
			args: [
				{
					key: 'user',
					prompt: 'Who is avoiding the gokudrip',
					type: 'user',
					default: msg => msg.author
				},
			]
		});
	}

	async run(msg, { user }) {
		const avatarURL = user.displayAvatarURL({ format: 'png', size: 512 });
		try {
			const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'gokudrip.png'));
			const { body } = await request.get(avatarURL);
			const avatar = await loadImage(body);
			const canvas = createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			ctx.drawImage(avatar, 300, 110, 280, 280)
			return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'gokudrip.png' }] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
}