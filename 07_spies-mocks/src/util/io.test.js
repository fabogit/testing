import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

// module to mock
vi.mock('fs');
vi.mock('path', () => {
	return {
		// default export object
		default: {
			// mock method
			join: (...args) => {
				// writeData parameter filename is the last element
				return args[args.length - 1];
			}
		}
	};
});

it('should execute the writeFile method', () => {
	const testData = 'Test';
	const testFilename = 'test.txt';

	writeData(testData, testFilename);

	// return expect(writeData(testData, testFilename)).resolves.toBeUndefined;
	expect(fs.writeFile).toBeCalled();
});

it('should recive the data and filename as writeFile method arguments', () => {
	const testData = 'Test';
	const testFilename = 'test.txt';

	writeData(testData, testFilename);

	// return expect(writeData(testData, testFilename)).resolves.toBeUndefined;
	expect(fs.writeFile).toBeCalled(testFilename, testData);
});