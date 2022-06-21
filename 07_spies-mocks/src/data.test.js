import { describe, it, expect, vi } from 'vitest';

import { generateReportData } from './data';

describe('generateReportData()', () => {
	it('should execute logFn if provided', () => {
		// spy replacement
		const logger = vi.fn();

		logger.mockImplementation(() => {
			// spy method
			// override implementation, mockImplementationOnce() only for one call
		});

		generateReportData(logger);
		expect(logger).toBeCalled();
	});
});