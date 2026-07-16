import { beforeEach, describe, expect, it, vi } from 'vitest';
import emailjs from '@emailjs/browser';

import { ContactMeFormPageObject } from './test/page-objects/ContactMeFormPageObject';

vi.mock('@emailjs/browser', () => ({
	default: {
		send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
	},
}));

const mockedSend = vi.mocked(emailjs.send);

describe('ContactMeForm', () => {
	beforeEach(() => {
		mockedSend.mockClear();
	});

	it('blocks submission when required fields are empty', async () => {
		const form = new ContactMeFormPageObject();

		await form.submit();

		// Never hits the real EmailJS network: the mock is the only send path
		// this test can reach, and it wasn't called at all.
		expect(mockedSend).not.toHaveBeenCalled();
		expect(form.isDialogVisible).toBe(false);
	});

	it('sends the message with the right template params and shows the confirmation dialog on valid submit', async () => {
		const form = new ContactMeFormPageObject();

		await form.fillName('Jane Doe');
		await form.fillEmail('jane@example.com');
		await form.fillSubject('Hello');
		await form.fillMessage('This is a test message.');
		await form.submit();

		expect(mockedSend).toHaveBeenCalledWith(
			'service_qd0fz5r',
			'template_l1deodu',
			{
				from_name: 'Jane Doe (jane@example.com)',
				to_name: 'Kike Barrantes',
				message: 'Subject: Hello / Message: This is a test message.',
			},
			'user_3AwNnISOAj3mKfNMzdWpd',
		);

		const dialogTitle = await form.waitForDialog();
		expect(dialogTitle).toContain('Message sent');
	});
});
