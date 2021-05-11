const Command = require('../../structures/Command');
const DIG = require("discord-image-generation");
const Discord = require("discord.js")

module.exports = class TrashCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'trash',
			aliases: ['SMtrash', 'trash', 'spidermantrash'],
			group: 'edit-meme-2',
			memberName: 'trash',
			description: 'ur trash',
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
					reasonURL: 'https://commons.wikimedia.org/wiki/File:trash_blank.svg'
				}
			],
			args: [
				{
					key: 'image',
					prompt: 'who is the trash?',
					type: 'image-or-avatar',
					default: msg => msg.author.displayAvatarURL({ format: 'png', size: 512 })
				}
			]
		});
	}

	async run(msg, { image }) {
        let img = await new DIG.Trash().getImage(image)
		let attach = new Discord.MessageAttachment(img, "trash.png");;
        return msg.channel.send(attach)
	}
};
