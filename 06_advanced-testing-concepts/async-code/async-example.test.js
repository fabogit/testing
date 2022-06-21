import { it, expect, describe } from 'vitest';

import { generateToken } from './async-example';

describe('generateToken()', () => {
	it('should generate a token value', (done) => {
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
	});
	it('should generate a token value (promise)', () => {
		const testUserEmail = 'test@email.com';

		expect(generateToken(testUserEmail)).resolves.toBeDefined();
		// return await expect(generateToken(testUserEmail)).rejects.toThrow()
	});

	it('should generate a token value (async/await)', async () => {
		const testUserEmail = 'test@email.com';

		const token = await generateToken(testUserEmail);

		expect(token).toBeDefined();
	});
});
