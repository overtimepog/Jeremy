const Command = require('../../structures/Command');
const Meme = require("memer-api");
const memer = new Meme();

module.exports = class jailCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'jail',
			group: 'edit-meme-3',
			memberName: 'jail',
			description: 'lol go to jail',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who is in jail?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        memer.jail(image).then(img => {
      	const attachment = new Discord.MessageAttachment(img, "jail.png");
      	msg.channel.send(attachment)
		})
	}
};
