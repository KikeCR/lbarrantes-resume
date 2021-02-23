import React, { useContext, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

import Navbar from './Navbar';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Experience from './Experience';
import ContactMe from './ContactMe';

import { LanguageProvider } from './contexts/language.context';
import { ThemeContext } from './contexts/theme.context';

const ResumeAppPaper = styled(Paper)`
    height: 100vh;
    flex-grow: 1;
    margin: 0;
    padding: 0;

	.MuiPaper-root {
		background-color: ${(props) => (props.isDarkMode ? '#18191A' : '#fafafa')};
		color: ${(props) => (props.isDarkMode ? '#fff' : '#18191A')};
	}
`;

function ResumeApp() {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<LanguageProvider>
			<ResumeAppPaper elevation={0} isDarkMode={isDarkMode}>
				<Navbar />
				<Profile />
				<AboutMe />
				<Experience />
				<ContactMe />
			</ResumeAppPaper>
		</LanguageProvider>
	);
}

export default ResumeApp;
