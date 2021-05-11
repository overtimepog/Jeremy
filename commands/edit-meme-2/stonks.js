const Command = require('../../structures/Command');
const DIG = require("discord-image-generation");
const Discord = require("discord.js")

module.exports = class StonksCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stonks',
			aliases: ['stonk'],
			group: 'edit-meme',
			memberName: 'stonks',
			description: 'make a user stonks',
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
					reasonURL: 'https://commons.wikimedia.org/wiki/File:stonks_blank.svg'
				}
			],
			args: [
				{
					key: 'image',
					prompt: 'who is the stonks?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        let img = await new DIG.Stonk().getImage(image)
		let attach = new Discord.MessageAttachment(img, "stonks.png");;
        return msg.channel.send(attach)
	}
};
