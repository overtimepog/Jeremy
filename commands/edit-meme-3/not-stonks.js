const Command = require('../../structures/Command');
const DIG = require("discord-image-generation");
const Discord = require("discord.js")

module.exports = class NotstonksCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'notstonks',
			aliases: ['notstonk', 'not-stonk', 'not-stonks'],
			group: 'edit-meme-3',
			memberName: 'notstonks',
			description: 'make a user not stonks',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who is not stonks?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        let img = await new DIG.NotStonk().getImage(image)
		let attach = new Discord.MessageAttachment(img, "notstonks.png");;
        return msg.channel.send(attach)
	}
};
