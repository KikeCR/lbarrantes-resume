import React, { useContext } from 'react';
import { Paper, Grid } from '@material-ui/core';
import ContactMeForm from './ContactMeForm';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

import dotsTitleLight from './images/dots-bg-light.svg'; // Context for this
import dotsTitleDark from './images/dots-bg.svg'; // Context for this

import { LanguageContext } from './contexts/language.context';
import { ThemeContext } from './contexts/theme.context';

const ContactMePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ResumeSubtitle = styled.h2`
	font-size: 36px;
	&:before {
		content: "";
		background-image: ${(props) => (props.isDarkMode ? `url(${dotsTitleLight});` : `url(${dotsTitleDark});`)};
		display: block;
		height: 37px;
		left: -14px;
		top: 15px;
		position: absolute;
		width: 37px;
	}
`;

const FormDescription = styled.p`
	a {
		color: #d62828;
	}
`;

const content = {
	en: {
		sectionTitle: 'Contact Me',
		formTitle: "Let's talk",
		formDescription:
			"Don't like forms? Send <a href='mailto:luis.barrantesv@gmail.com?subject=lbarrantes message'>email</a> instead."
	},
	es: {
		sectionTitle: 'Contáctame',
		formTitle: 'Hablemos un poco.',
		formDescription:
			"¿No te gustan los forms? <br />No hay problema, envíame un <a href='mailto:luis.barrantesv@gmail.com?subject=Mensaje desde lbarrantes'>email</a>."
	}
};

function ContactMe() {
	const { language } = useContext(LanguageContext);
	const { sectionTitle, formTitle, formDescription } = content[language];
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<ContactMePaper elevation={0} square>
			<Grid container justify="center">
				<Grid container item xs={11} md={10}>
					<Fade direction="up" triggerOnce>
						<ResumeSubtitle isDarkMode={isDarkMode}>{sectionTitle}</ResumeSubtitle>
					</Fade>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={11} md={3}>
						<Fade direction="up" triggerOnce cascade>
							<h3>{formTitle}</h3>
							<FormDescription dangerouslySetInnerHTML={{ __html: formDescription }} />
						</Fade>
					</Grid>
					<Grid item xs={11} md={9}>
						<Fade direction="up" triggerOnce>
							<ContactMeForm />
						</Fade>
					</Grid>
				</Grid>
			</Grid>
		</ContactMePaper>
	);
}

export default ContactMe;
