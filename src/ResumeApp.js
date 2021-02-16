import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Profile from './Profile';

const ResumeAppPaper = styled(Paper)`
    height: 100vh;
    background-color: #fafafa;
    margin: 0;
    padding: 0;
`;

const GridContainer = styled(Grid)`
`;

function ResumeApp() {
	return (
		<ResumeAppPaper elevation={0}>
			<GridContainer container justify="center">
				<Grid item xs={11} md={8} lg={5}>
					<Profile />
				</Grid>
			</GridContainer>
		</ResumeAppPaper>
	);
}

export default ResumeApp;
