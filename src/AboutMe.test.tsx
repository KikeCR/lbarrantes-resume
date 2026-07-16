import { describe, expect, it } from 'vitest';

import { AboutMePageObject } from './test/page-objects/AboutMePageObject';
import { technologies } from './data/technologies';
import { setStoredLanguage } from './test/render';

describe('AboutMe', () => {
	it('renders every technology from src/data/technologies.ts', () => {
		const aboutMe = new AboutMePageObject();
		expect(aboutMe.skillTitles).toEqual(technologies.map((tech) => tech.title));
	});

	it('renders the section title in English by default', () => {
		const aboutMe = new AboutMePageObject();
		expect(aboutMe.sectionTitle).toBe('Who is Luis Barrantes?');
	});

	it('renders the section title in Spanish when the stored language is es', () => {
		setStoredLanguage('es');
		const aboutMe = new AboutMePageObject();
		expect(aboutMe.sectionTitle).toBe('¿Quién es Luis Barrantes?');
	});
});
