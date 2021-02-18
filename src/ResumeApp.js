import React from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import Navbar from './Navbar';
import Profile from './Profile';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

const ResumeAppPaper = styled(Paper)`
    height: 100vh;
    flex-grow: 1;
    background-color: #fafafa;
    margin: 0;
    padding: 0;
`;

function ResumeApp() {
	return (
		<ResumeAppPaper elevation={0}>
			<Navbar />
			<Profile />
			<AboutMe />
			<ContactMe />
		</ResumeAppPaper>
	);
}

export default ResumeApp;
