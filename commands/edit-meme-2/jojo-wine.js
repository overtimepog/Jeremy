const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const { wrapText } = require('../../util/Canvas');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'SF-Pro-Display-Medium.otf'), { family: 'SF Pro' });

module.exports = class JojoWineCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'jojo-wine',
			aliases: ['jojo-swill', 'jojo-wine', 'jojowine', 'jojoswill'],
			group: 'edit-meme',
			memberName: 'jojo-wine',
			description: 'jojo doesnt like this wine with the text of your choice.',
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
					reasonURL: 'https://thehill.com/policy/technology/409737-this-is-a-test-us-officials-test-presidential-jojo-wine'
				}
			],
			args: [
				{
					key: 'message',
					prompt: 'What is on the wine lable',
					type: 'string',
					max: 12
				}
			]
		});
	}

	async run(msg, { message }) {
		const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'jojo-wine.png'));
		const canvas = createCanvas(base.width, base.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0);
		ctx.font = '30px SF Pro';
		ctx.fillStyle = 'black';
		ctx.textBaseline = 'top';
		let text = await wrapText(ctx, message, 540);
		text = text.length > 3 ? `${text.slice(0, 3).join('\n')}...` : text.join('\n');
		ctx.rotate(-8.4 * (Math.PI / 180));
		ctx.fillText(text, 193, 490);
		return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'jojo-wine.png' }] });
	}
};
