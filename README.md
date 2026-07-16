# Luis Barrantes

**Live site: [lbarrantes.com](https://lbarrantes.com)**

Hi, I'm Luis — an accomplished and proactive full-stack developer, with the confidence and ability to learn and adapt to new technologies with ease. I'm currently a Software Engineer at [Thoropass](https://thoropass.com), and my background spans front-end, back-end, and — most recently — AI agent / LLM tooling work.

I'm always eager to collaborate and work in teams. Outside of code: music and concerts, traveling, photography, the outdoors, dogs, working out, and time with my loved ones.

This repository is the source for my personal site above — a bilingual (EN/ES) resume/portfolio. If you're a recruiter or hiring manager skimming this repo, the sections below cover both who I am and how the site itself is built (the latter doubles as a look at how I approach a real-world codebase: TypeScript throughout, a real test suite, no dead config lying around).

## Background

- **Now**: Software Engineer at Thoropass (2021–present)
- **Previously**: Tech Lead / Software Engineer at SweetRush Inc., Front-end Developer at Hangar Worldwide (Critical Mass Latam), Reporting Analyst / Developer at Hewlett-Packard
- **Education**: Informática Empresarial, Universidad de Costa Rica

Full timeline with dates is on the [Experience section](https://lbarrantes.com/#experience-section) of the live site — kept there rather than duplicated here so it can't drift out of sync.

## Skills

Front-end, back-end, and AI agents / LLM tooling are my primary strengths, backed by React, Django/Python, SQL, GraphQL, and PostgreSQL day to day. See the [About Me section](https://lbarrantes.com/#about-me-section) (proficiency bars) and [Tech Stack section](https://lbarrantes.com/#tech-stack-section) (tools & platforms) on the site for the full breakdown.

## Get in touch

- **Email**: [luis.barrantesv@gmail.com](mailto:luis.barrantesv@gmail.com)
- **LinkedIn**: [linkedin.com/in/luis-enrique-barrantes-8141995b](https://www.linkedin.com/in/luis-enrique-barrantes-8141995b/)
- **GitHub**: [github.com/KikeCR](https://github.com/KikeCR)

Or just use the contact form on the live site.

---

## About this project

A from-scratch modernization of a 5-year-old Create React App resume site — rebuilt on a current toolchain, then given a full content and visual refresh. Notable technical decisions:

- **[Vite](https://vitejs.dev/)** (not CRA) for the build, with **TypeScript** (`strict: true`, including `noUncheckedIndexedAccess`) across the entire codebase — zero `.js`/`.jsx` files remain.
- **[MUI v6](https://mui.com/)** for accessible, interactive components (forms, dialogs, the timeline) layered with **[Tailwind CSS v4](https://tailwindcss.com/)** for layout, spacing, and the design-token system (colors and typography flow through CSS custom properties in `src/index.css`, consumed by both Tailwind utility classes and an MUI theme override in `src/theme.ts`).
- **Bilingual content (EN/ES)** via a small `pickTranslation` utility, with content data split so invariant data (dates, tech names, URLs) lives once, and only genuinely-translated copy is duplicated per language — see `src/data/*.ts`.
- **[Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)**, structured around a **Page Object** pattern (`src/test/page-objects/`) — each component under test gets a small wrapper class exposing semantic methods (`.selectLanguage('es')`, `.submit()`) instead of leaking raw queries into test bodies. EmailJS calls are mocked in the contact-form tests; nothing ever hits the real network.
- **[Prettier](https://prettier.io/)** (`semi: false`) enforcing a consistent, semicolon-free style.
- Deployed on **[Netlify](https://www.netlify.com/)** — see `netlify.toml`.

### Getting started

```bash
npm install
npm run dev        # start the dev server
```

Other scripts:

```bash
npm run build         # production build to dist/
npm run preview       # serve the production build locally
npm test               # run the Vitest suite once
npm run test:watch    # run tests in watch mode
npm run format         # apply Prettier formatting
npm run format:check  # check formatting without writing
```
