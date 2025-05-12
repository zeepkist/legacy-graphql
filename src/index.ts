export * from './gtr/index.js';
export * from './gtr/schema.js';
export * from './gtr/types.js';

import { createClient } from './gtr/index.js';

export const client = createClient({
	batch: true
});
