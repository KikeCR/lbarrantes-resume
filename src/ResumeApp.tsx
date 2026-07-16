import Navbar from './Navbar';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Experience from './Experience';
import ContactMe from './ContactMe';

import { LanguageProvider } from './contexts/language.context';

function ResumeApp() {
	return (
		<LanguageProvider>
			<div className="min-h-screen">
				<Navbar />
				<Profile />
				<AboutMe />
				<Experience />
				<ContactMe />
			</div>
		</LanguageProvider>
	);
}

export default ResumeApp;
