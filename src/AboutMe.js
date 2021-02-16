import React from 'react';
import { Paper, Avatar, Grid, Link, Button } from '@material-ui/core';
import styled from 'styled-components';

const AboutMePaper = styled(Paper)`
    height: 100vh;
    display: flex;
`;

function AboutMe() {
	return (
		<AboutMePaper elevation={0}>
			<h2>About me</h2>
		</AboutMePaper>
	);
}

export default AboutMe;
