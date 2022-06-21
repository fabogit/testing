import { it, expect, describe, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeAll(() => {
	user = new User(testEmail);
});

beforeEach(() => {
	user = new User(testEmail);
});

afterEach(() => {
});

afterAll(() => {
});

describe('User', () => {
	it('should update the email', () => {
		const newTestEmail = 'test2@test.com';

		user.updateEmail(newTestEmail);

		expect(user.email).toBe(newTestEmail);
	});

	it('should have an email property', () => {

		expect(user).toHaveProperty('email');
	});

	it('should store the provided email value', () => {

		expect(user.email).toBe(testEmail);
	});

	it('should clear the email', () => {

		user.clearEmail();

		expect(user.email).toBe('');
	});

	it('should still have an email property after clearing the email', () => {
		const user = new User(testEmail);
		user.clearEmail();

		expect(user).toHaveProperty('email');
	});
});
