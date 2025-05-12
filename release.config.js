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
  preset: 'conventionalcommits',
	plugins: [
		['@semantic-release/commit-analyzer', {
			preset: 'conventionalcommits'
		}],
		['@semantic-release/release-notes-generator', {
			preset: 'conventionalcommits',
		}],
		'@semantic-release/changelog',
		'@semantic-release/github',
		'@semantic-release/npm',
	],
};

export default config;
