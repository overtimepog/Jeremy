const Command = require('../../structures/Command');
const DIG = require("discord-image-generation");
const Discord = require("discord.js")

module.exports = class PoutineCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'poutine',
			aliases: ['poffice', 'dictator'],
			group: 'edit-meme-2',
			memberName: 'poutine',
			description: 'make a user the photo in poutines office',
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who is in the picture?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        let img = await new DIG.Poutine().getImage(image)
		let attach = new Discord.MessageAttachment(img, "poutine.png");;
        return msg.channel.send(attach)
	}
};
