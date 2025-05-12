import test from 'ava';
import { client, createClient } from './index.js';

test('createClient creates custom client', (t) => {
	const customClient = createClient();

	t.is(typeof customClient.query, 'function');
});

test('Pre-defined client exists', (t) => {
	t.is(typeof client.query, 'function');
});
