import { copyFile } from 'node:fs/promises';

const apis = ['gtr'];

for (const api of apis) {
	const path = `src/${api}/schema.graphql`;
	const dest = `dist/${api}/schema.graphql`;

	await copyFile(path, dest);

	console.log(`Copied ${path} to ${dest}`);
}
