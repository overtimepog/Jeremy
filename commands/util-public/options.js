const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class OptionsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'options',
			aliases: ['options-list'],
			group: 'util-public',
			memberName: 'options',
			description: 'Responds with a list of server options.',
			guarded: true
		});
	}

	run(msg) {
		return msg.say(stripIndents`
			__**Server Options**__
			Place the option in the appropriate channel's topic to use.

			__General Options__
			\`<Jeremy:disable-leave>\` Disables leave messages (System Channel).

			__Phone Options__
			\`<Jeremy:phone>\` Allows this channel to recieve phone calls.
			\`<Jeremy:phone:auto-accept>\` Automatically accepts all incoming phone calls.
			\`<Jeremy:phone:no-notice>\` Hides the abuse notice from phone call pick-ups.
			\`<Jeremy:phone:no-voicemail>\` Prevents this channel from recieving voicemails for missed calls.
			\`<Jeremy:phone:no-random>\` Makes the channel only able to be called directly, rather than picked randomly.
			\`<Jeremy:phone:block:INSERTIDHERE>\` Blocks a channel or server from contacting you via phone.
			\`<Jeremy:phone-book:hide>\` Hides this channel from \`phone-book\`.

			__Portal Options__
			\`<Jeremy:portal>\` Marks the channel as a portal channel for \`portal-send\`.
			\`<Jeremy:portal:hide-name>\` Hides the channel's name when the channel is chosen to recieve a portal message.
		`);
	}
};
