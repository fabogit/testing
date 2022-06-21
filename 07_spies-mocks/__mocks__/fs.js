import { vi } from 'vitest';

export const promises = {
	// fs.writeFile spy function
	writeFile: vi.fn((path, data) => {
		return new Promise((resolve, reject) => {
			resolve();
		})
	})
};
