import { Navbar } from './Navbar'
import { Profile } from './Profile'
import { AboutMe } from './AboutMe'
import { TechLogos } from './TechLogos'
import { Experience } from './Experience'
import { NowSection } from './NowSection'
import { ContactMe } from './ContactMe'
import { Footer } from './Footer'

import { LanguageProvider } from './contexts/language.context'

export const ResumeApp = () => {
	return (
		<LanguageProvider>
			<div className="min-h-screen">
				<Navbar />
				<Profile />
				<AboutMe />
				<TechLogos />
				<Experience />
				<NowSection />
				<ContactMe />
				<Footer />
			</div>
		</LanguageProvider>
	)
}
