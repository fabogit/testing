import { it, expect, describe } from 'vitest';

import { generateToken } from './async-example';

describe('generateToken()', () => {
	it('should generate a token value', () => new Promise(done => {
		const testUserEmail = 'test@email.com';

		generateToken(testUserEmail, (err, token) => {
			// expecting callback result to exist
			try {
				expect(token).toBeDefined();
				done();
			} catch (error) {
				done(error);
			}

			// FIX async bug, this works if done cb is not present
			// try {
			// 	expect(token).toBe(2);
			// 	done();
			// } catch (error) {
			// 	done(error);
			// }
		});
	}));
});