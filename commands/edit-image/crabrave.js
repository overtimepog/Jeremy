const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const { wrapText } = require('../../util/Canvas');
const GIFEncoder = require('gifencoder');
const request = require('node-superfetch');
const path = require('path');
const { streamToArray } = require('../../util/Util');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Regular.ttf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-CJK.otf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Emoji.ttf'), { family: 'Noto' });
const frameCount = 102;

module.exports = class crabraveCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'crabrave',
			aliases: ['crabrave', 'crab'],
			group: 'edit-image',
			memberName: 'crabrave',
			description: 'Sends crab rave gif with text of the users choice',
			throttling: {
				usages: 1,
				duration: 8
			},
			clientPermissions: ['ATTACH_FILES'],
			userPermissions: ['ATTACH_FILES'],
			credit: [
				{
					name: 'Sam',
					url: 'https://github.com/Samathingamajig',
					reason: 'All the help',
					// eslint-disable-next-line max-len
					reasonURL: 'https://github.com/Samathingamajig'
				}
			],
			args: [
				{
					key: 'thing',
					prompt: 'what do u want the crabs to rave about?',
					type: 'string',
					max: 40
				}
			]
		});
	}

		async run(msg, { thing }) {
		try {
			msg.say("Generating.... 🦀")
			const encoder = new GIFEncoder(352, 200);
			const canvas = createCanvas(352, 200);
			const ctx = canvas.getContext('2d');
			const stream = encoder.createReadStream();
			encoder.start();
			encoder.setRepeat(0);
			encoder.setDelay(1);
			encoder.setQuality(200);
			for (let j = 0; j < frameCount; j += 1.5) {
				const i = Math.round(j);
				const frameID = `frame-${i.toString().padStart(3, '0')}.png`;
				const frame = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'rave', frameID));
				const ratio = frame.width / frame.height;
				const height = Math.round(352 / ratio);
				ctx.drawImage(frame, 0, 0, frame.width, frame.height);
				ctx.textAlign = 'center';
				ctx.font = '30px Noto';
				ctx.fillStyle = '#FFFFFF';
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 5;
				ctx.strokeText(thing, frame.width / 2, 30, frame.width*0.8);
				ctx.fillText(thing, frame.width / 2, 30, frame.width*0.8);
				encoder.addFrame(ctx);
			}
			encoder.finish();
			const buffer = await streamToArray(stream);
			msg.say({ files: [{ attachment: Buffer.concat(buffer), name: 'crabrave.gif' }] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
