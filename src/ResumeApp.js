import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Navbar from './Navbar';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Experience from './Experience';
import ContactMe from './ContactMe';

import { LanguageProvider } from './contexts/language.context';
import { ThemeContext } from './contexts/theme.context';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => (props.isDarkMode ? props.theme.darkModeBg : props.theme.lightModeBg)};
  }
`;

const ResumeAppPaper = styled(Paper)`
    height: 100vh;
    flex-grow: 1;
    margin: 0;
    padding: 0;

	.MuiPaper-root {
		background-color: ${(props) => (props.isDarkMode ? props.theme.darkModeBg : props.theme.lightModeBg)};
		color: ${(props) => (props.isDarkMode ? props.theme.darkModeFontColor : props.theme.lightModeFontColor)};
	}
`;

// Theme for the resume app.
const resumeTheme = {
	// Main colors.
	primaryColor: '#003049',
	secondaryColor: '#D62828',

	// Variable colors depending on the theme.
	darkModeBg: '#18191A',
	lightModeBg: '#fafafa',
	darkModeFontColor: '#fff',
	lightModeFontColor: '#18191A',

	// Navbar.
	navbarTitleText: '#fff',
	navbarIconsColor: '#fff',
	navbarHeight: '80px',

	// Profile.
	socialIconsColor: '#fcbf49',
	socialIconsColorHover: '#f77f00',

	// AboutMe.
	bubbleFontColor: '#fff',
	bubbleBgColor: '#003049',
	skillProgressMain: '#D62828',
	skillProgressSecondary: '#fcbf49',
	skillProgressBg: '#ededed',

	// Experience.
	timelineBg: '#003049',
	timelineIconColor: '#D62828',
	timelineConnectorColor: '#D62828',
	timelineText: '#fff',
	timelineTimeStampTextColor: '#EAE2B7',

	// Contact Me.
	textFieldBg: '#fff',
	textFieldBorderDarkMode: '#F77F00',
	textFieldBorderLightMode: '#003049',

	// Buttons
	mainButtonColor: '#D62828',
	mainButtonColorHover: '#9B1C1C',
	mainButtonTextColor: '#fff',

	// Links.
	mainLinkColor: '#D62828'
};

function ResumeApp() {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<LanguageProvider>
			<ThemeProvider theme={resumeTheme}>
				<GlobalStyle isDarkMode={isDarkMode} />
				<ResumeAppPaper elevation={0} isDarkMode={isDarkMode}>
					<Navbar />
					<Profile />
					<AboutMe />
					<Experience />
					<ContactMe />
				</ResumeAppPaper>
			</ThemeProvider>
		</LanguageProvider>
	);
}

export default ResumeApp;
