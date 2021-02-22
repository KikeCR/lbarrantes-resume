import React, { useContext } from 'react';
import { Paper, Grid } from '@material-ui/core';
import ContactMeForm from './ContactMeForm';
import styled from 'styled-components';
import { LanguageContext } from './contexts/language.context';

const ContactMePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const content = {
	en: {
		sectionTitle: 'Contact Me',
		formTitle: "Let's talk",
		formDescription: "Don't like forms? Send email instead."
	},
	es: {
		sectionTitle: 'Contáctame',
		formTitle: 'Hablemos un poco.',
		formDescription: '¿No te gustan los forms? No importa, envía un email.'
	}
};

function ContactMe() {
	const { language } = useContext(LanguageContext);
	const { sectionTitle, formTitle, formDescription } = content[language];
	return (
		<ContactMePaper elevation={0} square>
			<Grid container justify="center">
				<Grid container item xs={11} md={10}>
					<h2>{sectionTitle}</h2>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={11} md={3}>
						<h3>{formTitle}</h3>
						<p>{formDescription}</p>
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
