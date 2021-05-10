const SubredditCommand = require('../../structures/commands/Subreddit');
const { list } = require('../../util/Util');
const subreddits = require('../../assets/json/furry');

module.exports = class furryCommand extends SubredditCommand {
	constructor(client) {
		super(client, {
			name: 'furry',
			group: 'random-img',
			memberName: 'furry',
			description: 'Responds with a random furry image.',
			details: `**Subreddits:** ${subreddits.join(', ')}`,
			clientPermissions: ['EMBED_LINKS'],
			nsfw: true,
			postType: 'image',
			getIcon: true,
			credit: [
				{
					name: '0vertime-dev',
					url: 'https://github.com/0vertime-dev',
					reason: 'Original Subreddit List'
				}
			],
			args: [
				{
					key: 'subreddit',
					prompt: `What subreddit do you want to get furry from? Either ${list(subreddits, 'or')}.`,
					type: 'string',
					oneOf: subreddits,
					default: () => subreddits[Math.floor(Math.random() * subreddits.length)],
					parse: subreddit => subreddit.toLowerCase()
				}
			]
		});
	}

	generateText(post, subreddit, icon) {
		return this.makeEmbed(post, subreddit, icon);
	}
};
