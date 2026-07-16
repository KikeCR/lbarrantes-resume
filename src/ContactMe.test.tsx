import { describe, expect, it } from 'vitest';

import { ContactMePageObject } from './test/page-objects/ContactMePageObject';
import { setStoredLanguage } from './test/render';

const CONTACT_EMAIL = 'luis.barrantesv@gmail.com';

describe('ContactMe', () => {
	it('renders a mailto link with the contact email and English subject', () => {
		const contactMe = new ContactMePageObject();

		expect(contactMe.mailtoHref).toBe(`mailto:${CONTACT_EMAIL}?subject=lbarrantes message`);
	});

	it('renders a mailto link with the contact email and Spanish subject when the stored language is es', () => {
		setStoredLanguage('es');
		const contactMe = new ContactMePageObject();

		expect(contactMe.mailtoHref).toBe(`mailto:${CONTACT_EMAIL}?subject=Mensaje desde lbarrantes`);
	});

	it('renders the section title in English by default', () => {
		const contactMe = new ContactMePageObject();
		expect(contactMe.sectionTitle).toBe('Contact Me');
	});
});
