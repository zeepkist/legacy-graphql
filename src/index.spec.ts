import test from 'ava';
import { gtr } from './index.js';

test('GTR API exists', (t) => {
	t.is(typeof gtr.query, 'function');
});
