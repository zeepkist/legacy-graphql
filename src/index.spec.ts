import test from 'ava';
import { gtr, gtrBeta } from './index.js';

test('GTR API exists', (t) => {
	t.is(typeof gtr.query, 'function');
});

test('GTR Beta API exists', (t) => {
	t.is(typeof gtrBeta.query, 'function');
});
