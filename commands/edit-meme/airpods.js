const Command = require('../../structures/Command');
const Meme = require("memer-api");
const memer = new Meme();

module.exports = class AirpodsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'airpods',
			aliases: ['airpod'],
			group: 'edit-meme-2',
			memberName: 'airpods',
			description: 'airpods',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who has airpods?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        memer.airpods(image).then(img => {
      	const attachment = new Discord.MessageAttachment(img, "airpods.png");
      	msg.channel.send(attachment)
		})
	}
};
