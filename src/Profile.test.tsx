import { describe, expect, it, vi } from 'vitest';

import { ProfilePageObject } from './test/page-objects/ProfilePageObject';

describe('Profile', () => {
	it("renders Luis Barrantes's name", () => {
		const profile = new ProfilePageObject();
		expect(profile.name).toBe('Luis Barrantes');
	});

	it('links out to GitHub and LinkedIn', () => {
		const profile = new ProfilePageObject();
		expect(profile.githubHref).toBe('https://github.com/KikeCR');
		expect(profile.linkedInHref).toBe('https://www.linkedin.com/in/luis-enrique-barrantes-8141995b/');
	});

	it('scrolls to the contact section when the CTA is clicked', async () => {
		const profile = new ProfilePageObject();
		const contactSection = document.createElement('div');
		contactSection.id = 'contact-me-section';
		document.body.appendChild(contactSection);
		contactSection.scrollIntoView = vi.fn();

		await profile.clickContactMe();

		expect(contactSection.scrollIntoView).toHaveBeenCalled();
		contactSection.remove();
	});
});
