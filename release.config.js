/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
	repositoryUrl: 'https://github.com/zeepkist/graphql',
	branches: ['develop'],
	debug: false,
	ci: true,
	dryRun: false,
	tagFormat: '${version}',
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'conventionalcommits',
				releaseRules: [
					{ type: 'docs', release: 'patch' },
					{ type: 'build', release: 'patch' },
					{ type: 'refactor', release: 'patch' },
					{ type: 'feat', release: 'minor' },
				],
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				preset: 'conventionalcommits',
			},
		],
		'@semantic-release/changelog',
		'@semantic-release/github',
		'@semantic-release/npm',
	],
};

module.exports = config;
