import { it, expect } from 'vitest'

import { app } from './math'

it('should summarize all numbers values in an array', () => {
	const result = app([1, 2, 3]);
	expect(result).toBe(6)
});
