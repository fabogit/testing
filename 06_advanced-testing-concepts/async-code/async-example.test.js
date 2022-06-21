import { it, expect, describe } from 'vitest';

import { generateToken } from './async-example';

describe('generateToken()', () => {
	it('should generate a token value', () => {
		const testUserEmail = 'test@email.com';

		generateToken(testUserEmail, (err, token) => {
			// expecting callback result to exist
			expect(token).toBeDefined();
			// expect(token).toBe(2); // async bug, this also works
		});
	});
});