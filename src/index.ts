import { createClient as createGtrBeta } from './gtr-beta/index.js';
import { createClient as createGtr } from './gtr/index.js';

export const gtr = createGtr({
	batch: true,
});

export const gtrBeta = createGtrBeta({
	batch: true,
});
