import { describe, it, expect, vi } from 'vitest';

import { sendDataRequest } from './http';

// mock a spy method for fetch
const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
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

it('should return any available response data', () => {
	const testData = { key: 'test' };

	return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});
