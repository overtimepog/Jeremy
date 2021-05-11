const Command = require('../../structures/Command');
const DIG = require("discord-image-generation");
const Discord = require("discord.js")

module.exports = class FuneralCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'funeral',
			aliases: ['death'],
			group: 'edit-meme',
			memberName: 'funeral',
			description: 'A soldiers funeral',
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
				},
				{
					name: 'Wikimedia Commons',
					url: 'https://commons.wikimedia.org/wiki/Main_Page',
					reason: 'Image',
					reasonURL: 'https://commons.wikimedia.org/wiki/File:death_blank.svg'
				}
			],
			args: [
				{
					key: 'image',
					prompt: 'who is dead?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        let img = await new DIG.Rip().getImage(image)
		let attach = new Discord.MessageAttachment(img, "death.png");;
        return msg.channel.send(attach)
	}
};
