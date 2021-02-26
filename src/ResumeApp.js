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
	mainLightModeColor: '#084C61',
	secondaryLightModeColor: '#DB3A34',
	mainDarkModeColor: '#323031',
	secondaryDarkModeColor: '#DB3A34',

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
	socialIconsColor: '#FFC857',
	socialIconsColorHover: '#DB3A34',

	// AboutMe.
	bubbleFontColor: '#fff',
	bubbleLightBgColor: '#084C61',
	bubbleDarkBgColor: '#323031',

	skillProgressMain: '#DB3A34',
	skillProgressSecondary: '#FFC857',
	skillProgressBg: '#ededed',

	// Experience.
	timelineLightBg: '#084C61',
	timelineDarkBg: '#323031',

	timelineIconColor: '#DB3A34',
	timelineConnectorColor: '#DB3A34',
	timelineText: '#fff',
	timelineTimeStampTextColor: '#FFC857',

	// Contact Me.
	textFieldBgLight: '#fafafa',
	textFieldBgDark: '#323031',

	textFieldLabelLight: '#18191A',
	textFieldLabelDark: '#ffffff',

	textFieldBorderDark: '#FFC857',
	textFieldBorderLight: '#084C61',

	// Buttons
	mainButtonColor: '#DB3A34',
	mainButtonColorHover: '#FFC857',
	mainButtonTextColor: '#fff',

	// Links.
	mainLinkColor: '#DB3A34'
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
