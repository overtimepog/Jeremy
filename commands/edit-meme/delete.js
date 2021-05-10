const Command = require('../../structures/Command');
const DIG = require("discord-image-generation");
const Discord = require("discord.js")

module.exports = class DeleteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'delete',
			aliases: ['delete'],
			group: 'edit-meme',
			memberName: 'delete',
			description: 'delete some trash',
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
					reasonURL: 'https://commons.wikimedia.org/wiki/File:delete_blank.svg'
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
        let img = await new DIG.Delete().getImage(image)
		let attach = new Discord.MessageAttachment(img, "delete.png");;
        return message.channel.send(attach)
	}
};
