const Command = require('../../structures/Command');
const DIG = require("discord-image-generation");
const Discord = require("discord.js")

module.exports = class MyBabyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mybaby',
			aliases: ['affect', 'affect-my-baby', 'mom-affect'],
			group: 'edit-meme-3',
			memberName: 'mybaby',
			description: 'no it doesnt affect my baby',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'image',
					prompt: 'who is the affected child looking at?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        let img = await new DIG.Affect().getImage(image)
		let attach = new Discord.MessageAttachment(img, "mybaby.png");;
        return msg.channel.send(attach)
	}
};
