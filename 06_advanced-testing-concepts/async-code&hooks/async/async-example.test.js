import { it, expect, describe } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

describe.concurrent('generateToken()', () => {
	it('should generate a token value', (done) => {
		const testUserEmail = 'test@email.com';

		generateToken(testUserEmail, (err, token) => {
			// expecting callback result to exist
			try {
				return expect(token).toBeDefined();
				done();
			} catch (error) {
				done(error);
			}

			// FIX async bug, this works if done cb is not present -> it('should work', () => new Promise(done => {... done()}))
			// try {
			// 	return expect(token).toBe(2);
			// 	done();
			// } catch (error) {
			// 	done(error);
			// }
		});
	});
});

describe.concurrent('generateTokenPromise()', () => {
	it('should generate a token value (promise)', () => {
		const testUserEmail = 'test@email.com';

		return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
		// return await expect(generateToken(testUserEmail)).rejects.toThrow()
	});

	it('should generate a token value (async/await)', async () => {
		const testUserEmail = 'test@email.com';

		const token = await generateTokenPromise(testUserEmail);

		expect(token).toBeDefined();
	});
});
