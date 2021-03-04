const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const request = require('node-superfetch');
const { shortenText } = require('../../util/Canvas');
const { wrapText } = require('../../util/Canvas');
const { ReactionUserManager } = require('discord.js');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Regular.ttf'), { family: 'Noto' });

module.exports = class FloorCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'floor',
			group: 'edit-meme',
			memberName: 'floor',
			description: 'Sends a floor meme',
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
					prompt: 'Who is avoiding the floor',
					type: 'user',
					default: msg => msg.author
				},
				{
					key: 'floor',
					prompt: 'whats the floor',
					type: 'string',
					max: 50
				}
			]
		});
	}

	async run(msg, { user, floor }) {
		const avatarURL = user.displayAvatarURL({ format: 'png', size: 512 });
		try {
			const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'floor.png'));
			const { body } = await request.get(avatarURL);
			const avatar = await loadImage(body);
			const canvas = createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			ctx.drawImage(avatar, 100, 90, 45, 45)
			ctx.drawImage(avatar, 330, 90, 23, 23)
			ctx.font = '25px Nato';
			ctx.fillStyle = '#1f1f1f';
			let text = await wrapText(ctx, floor, 300);
			ctx.fillText(text, 168, 58);
			return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'floor.png' }] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
}