import { createClient as createGtr } from './gtr/index.js';

export const gtr = createGtr({
	batch: true,
});
