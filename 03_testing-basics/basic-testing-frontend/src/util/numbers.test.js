import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should transform a string number to a number of type Number', () => {
	const input = '5';

	const result = transformToNumber(input);

	expect(result).toBeTypeOf('number');
});

it('should transform a string number to the corresponding number of type Number', () => {
	const input = '1';

	const result = transformToNumber(input);

	expect(result).toBe(+input);
});

it('should yeld NaN for non-transformable values', () => {
	const input = 'invalid';
	const input2 = {};

	const result = transformToNumber(input);
	const result2 = transformToNumber(input2);

	expect(result).toBeNaN();
	expect(result2).toBeNaN();
});