const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const { shortenText } = require('../../util/Canvas');
const { wrapText } = require('../../util/Canvas');
const request = require('node-superfetch');
const { centerImagePart } = require('../../util/Canvas');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Regular.ttf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-CJK.otf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Emoji.ttf'), { family: 'Noto' });

module.exports = class Draw25Command extends Command {
	constructor(client) {
		super(client, {
			name: 'draw25',
			aliases: ['draw25'],
			group: 'edit-meme-2',
			memberName: 'draw25',
			description: 'Sends a "Draw 25" meme with the person of your choice.',
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
					key: 'image',
					prompt: 'who is drawing the cards?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				},
				{
					key: 'cards',
					prompt: 'What should the text of the card be?',
					type: 'string',
					max: 10
				}
			]
		});
	}

    async run(msg, { cards, image }) {
	const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'draw25.png'));
		const { body } = await request.get(image);
			const data = await loadImage(body);
			const canvas = createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			const { x, y, width, height } = centerImagePart(data, 310, 65, 100, 100);
			ctx.drawImage(data, x, y, width, height);
			ctx.textBaseline = 'top';
			ctx.textAlign = 'center';
			ctx.font = '25px Noto';
			ctx.fillText(cards.join('\n'), 85, 160, 120);
        return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'draw25.png' }] });
    }
};
