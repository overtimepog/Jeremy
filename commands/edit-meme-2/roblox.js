const Command = require('../../structures/Command');
const Meme = require("memer-api");
const memer = new Meme();

module.exports = class RobloxCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'roblox',
			group: 'edit-meme-2',
			memberName: 'roblox',
			description: 'lol ur roblox',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who is in roblox?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        memer.roblox(image).then(img => {
      	const attachment = new Discord.MessageAttachment(img, "roblox.png");
      	msg.channel.send(attachment)
		})
	}
};
