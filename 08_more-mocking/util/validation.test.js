import { describe, it, expect } from 'vitest';

import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
	it('should throw an error if an empty string is provided as a value', () => {
		const testInput = '';

		const validationFn = () => validateNotEmpty(testInput);

		expect(validationFn).toThrow();
	});

	it('should throw an error if a blank string is provided as a value', () => {
		const testInput = '   ';

		const validationFn = () => validateNotEmpty(testInput);

		expect(validationFn).toThrow();
	});

	it('should throw an error with the provided error message', () => {
		const testInput = '';
		const testErrorMessage = 'test error';

		const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

		expect(validationFn).toThrow(testErrorMessage);
	});
});
