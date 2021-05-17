const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const { shortenText } = require('../../util/Canvas');
const { wrapText } = require('../../util/Canvas');
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
			description: 'Sends a "Draw 25" meme with the passwords of your choice.',
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
					key: 'cards',
					prompt: 'What should the text of the card be?',
					type: 'string',
					max: 50
				},
				{
					key: 'guy',
					prompt: 'who is the guy?',
					type: 'string',
					max: 50
				}
			]
		});
	}

    async run(msg, { cards, guy }) {
        const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'draw25.png'));
        const canvas = createCanvas(base.width, base.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(base, 0, 0);
        ctx.font = '25px Noto';
        const card = await wrapText(ctx, "​    " + (cards.trim()), 150);
        ctx.fillText(card.join('\n'), 85, 160, 120);
        ctx.textAlign = "center";
        const guys = await wrapText(ctx, guy, 180);
        ctx.fillText(guys.join('\n'), base.width*3/4, 40, 160);
        return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'draw25.png' }] });
    }
};
