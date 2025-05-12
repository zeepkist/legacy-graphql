import { readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const runtimePath = 'runtime';
const apis = ['gtr'];

try {
	// Move runtime to top level
	await rm(join('src', runtimePath), { recursive: true, force: true });
	await rename(join('src', apis[0], runtimePath), join('src', runtimePath));
} catch (error) {
	console.error('Failed to move runtime to top level', error);
}

for (const api of apis) {
	const path = join('src', api, runtimePath);
	await rm(path, { recursive: true, force: true });

	// Map files to use top level runtime
	const files = await readdir(join('src', api));

	for (const file of files) {
		if (file.endsWith('.graphql')) {
			continue;
		}

		const filePath = join('src', api, file);

		let content = await readFile(filePath, 'utf8');
		content = content.replaceAll("'./runtime'", "'../runtime/index.js'");
		content = content.replaceAll("'./types'", "'./types.js'");
		content = content.replaceAll("'./schema'", "'./schema.js'");

		await writeFile(filePath, content);

		console.log(`Updated ${filePath}`);
	}
}

const runtimeFiles = await readdir(join('src', runtimePath));

for (const file of runtimeFiles) {
	const filePath = join('src', runtimePath, file);

	let content = await readFile(filePath, 'utf8');

	content = content.replaceAll(
		/(from\s+)(["'])(?!.*\.js)(\.?\.\/.*)(["'])/g,
		'$1$2$3.js$4',
	);

	await writeFile(filePath, content);

	console.log(`Updated ${filePath}`);
}
