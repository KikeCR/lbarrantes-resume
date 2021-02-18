import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import ContactMeForm from './ContactMeForm';
import styled from 'styled-components';

const ContactMePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ContactMe() {
	return (
		<ContactMePaper elevation={0}>
			<Grid container justify="center">
				<Grid container item xs={11} md={10}>
					<h2>Contact Me</h2>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={11} md={3}>
						<h3>Let's talk</h3>
						<p>Lorem ipsum talk. Send email instead.</p>
					</Grid>
					<Grid item xs={11} md={9}>
						<ContactMeForm />
					</Grid>
				</Grid>
			</Grid>
		</ContactMePaper>
	);
}

export default ContactMe;
