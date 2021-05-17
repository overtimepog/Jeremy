const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const { wrapText } = require('../../util/Canvas');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'SF-Pro-Display-Medium.otf'), { family: 'SF Pro' });

module.exports = class FishEatCatCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'fish-eat-cat',
			aliases: ['fish-eat-cat', 'fisheatcat', 'fish-cat', 'fishcat'],
			group: 'edit-meme-2',
			memberName: 'fish-eat-cat',
			description: 'Fish east Cat with the text of your choice.',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			credit: [
				{
					name: 'Overtime2005',
					url: 'https://github.com/Overtime2005',
					reason: 'Concept'
				},
				{
					name: 'Apple',
					url: 'https://www.apple.com/',
					reason: 'San Francisco Font',
					reasonURL: 'https://developer.apple.com/fonts/'
				},
				{
					name: 'The Hill',
					url: 'https://thehill.com/',
					reason: 'Image',
					// eslint-disable-next-line max-len
					reasonURL: 'https://thehill.com/policy/technology/409737-this-is-a-test-us-officials-test-presidential-God'
				}
			],
			args: [
				{
					key: 'cat',
					prompt: 'whats the cat?',
					type: 'string',
					max: 45
				},
				{
					key: 'fish',
					prompt: 'whats the fish?',
					type: 'string',
					max: 45
				}
			]
		});
	}

	async run(msg, { fish, cat}) {
		const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'fish-eat-cat.jpg'));
		const canvas = createCanvas(base.width, base.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0);
		ctx.font = '15px SF Pro';
		ctx.fillStyle = 'white';
		ctx.textBaseline = 'top';
		ctx.fillText(fish, 250, 121);
		ctx.fillText(cat, 380, 230);
		return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'fish-eat-cat.jpg' }] });
	}
};
