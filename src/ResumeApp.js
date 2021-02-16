import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Profile from './Profile';
import AboutMe from './AboutMe';

const ResumeAppPaper = styled(Paper)`
    height: 100vh;
    background-color: #fafafa;
    margin: 0;
    padding: 0;
`;

function ResumeApp() {
	return (
		<ResumeAppPaper elevation={0}>
			<Profile />
			<AboutMe />
		</ResumeAppPaper>
	);
}

export default ResumeApp;
