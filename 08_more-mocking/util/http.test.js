import { describe, it, expect, vi } from 'vitest';

import { sendDataRequest } from './http';

// mock a spy method for fetch
const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
	// check for json parsing
	if (typeof options.body !== 'string') {
		return reject('Not a string');
	}
	return new Promise((resolve, reject) => {
		const testResponse = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testResponseData);
				});
			}
		};
		resolve(testResponse);
	});
});
// mock will override a global method -> stubGlobal()
vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
	it('should return any available response data', () => {
		const testData = { key: 'test' };

		return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
	});

	it('should convert the provided data to JSON before sending the request', async () => {
		const testData = { key: 'test' };

		let errorMessage;
		try {
			await sendDataRequest(testData)
		} catch (error) {
			errorMessage = error
		}
		expect(errorMessage).not.toBe('Not a string')
	});
});
