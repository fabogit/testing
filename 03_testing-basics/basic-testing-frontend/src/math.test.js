import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all numbers values in an array', () => {
	// Arrange
	const numbers = [1, 2, 3];

	// Act
	const result = add(numbers);

	// Assert
	const expectedResult = numbers.reduce((prevValue, currValue) => prevValue + currValue, 0);
	expect(result).toBe(expectedResult);
});

it('should yeld NaN if at least one invalid number is provided', () => {
	const inputs = ['Invalid', 5];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it('should yeld a correct sum if an array of numeric string values is provided', () => {
	const stringNumbers = ['1', '2'];

	const result = add(stringNumbers);

	const expectedResult = stringNumbers.reduce((prevValue, currValue) => +prevValue + +currValue, 0);
	expect(result).toBe(expectedResult);
});

it('should yeld 0 if an empty array is provided', () => {
	const numbers = [];

	const result = add(numbers);

	expect(result).toBe(0);
});

it('should throw an error if no value is passed in the function', () => {
	const resultFn = () => add();
	expect(resultFn).toThrow();
	// try/catch error catch & expect(error).toBeDefined()
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
	const num1 = 1;
	const num2 = 2;

	const resultFn = () => add(num1, num2);

	expect(resultFn).toThrow();
});