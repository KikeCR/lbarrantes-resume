import React, { useContext } from 'react';
import { Paper, Avatar, Grid, LinearProgress } from '@material-ui/core';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

import avatar from './images/lbarrantes_avatar.jpg'; // Context for this
import dotsTitleLight from './images/dots-bg-light.svg'; // Context for this
import dotsTitleDark from './images/dots-bg.svg'; // Context for this

import { LanguageContext } from './contexts/language.context';
import { ThemeContext } from './contexts/theme.context';

const AboutMePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

	@media (max-width: 599px) {
		min-height: 100vh;
		height: auto;
		padding: 40px 0;
  	}
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

const AboutMeAvatar = styled(Avatar)`
    &.MuiAvatar-root {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        float: left;
        margin-left: 10%;

		@media (max-width: 599px) {
			margin: 0 auto;
			float: none;
		}
    }
`;

const TextBubblePaper = styled(Paper)`
    position: relative;
    &.MuiPaper-root.description-bubble {
        padding: 20px 30px;
		color: ${(props) => props.theme.bubbleFontColor};
        background-color: ${(props) => props.theme.bubbleBgColor};
        text-align: right;
        line-height: 1.5;
        border-radius: 30px;
    }
    &:after {
        content: "";
        width: 0; 
        height: 0; 
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        position: absolute;
        right: -10px;
        top: 20%;
        border-left-color: ${(props) => props.theme.bubbleBgColor};

		@media (max-width: 599px) {
			content: none;
		}
    }
`;

const ProgressBarContainer = styled.div`
	width: 95%;
	margin: 0 auto;
	padding-top: 25px;
`;

const LinearProgressResume = styled(LinearProgress)`
    &.MuiLinearProgress-root {
        height: 12px;
        border-radius: 5px;
    }

    &.main .MuiLinearProgress-barColorPrimary {
        background-color: ${(props) => props.theme.skillProgressMain};
		
    }

    &.main.MuiLinearProgress-colorPrimary{
        background-color: ${(props) => props.theme.skillProgressBg};
    }

    .MuiLinearProgress-barColorPrimary {
        background-color: ${(props) => props.theme.skillProgressSecondary};
    }

    &.MuiLinearProgress-colorPrimary{
        background-color: ${(props) => props.theme.skillProgressBg};
    }
`;

const content = {
	en: {
		sectionTitle: 'Who am I?',
		myDescription:
			"<p>I'm Luis Barrantes, an accomplished and proactive front-end developer, with the ability to learn and adapt to new technologies with ease. Working towards becoming a full-stack developer. Always eager to collaborate and work in teams.</p><p>Love music and concerts, traveling, outdoors, dogs, working out and hanging out with the people I care about.</p>",
		technologies: [
			{ title: 'Front-end', level: 95, class: 'main' },
			{ title: 'Back-end', level: 40, class: 'main' },
			{ title: 'Databases', level: 80, class: 'main' },
			{ title: 'React', level: 80, class: '' },
			{ title: 'PHP', level: 70, class: '' },
			{ title: 'SQL', level: 75, class: '' },
			{ title: 'Adapt Framework', level: 90, class: '' },
			{ title: 'Python', level: 30, class: '' },
			{ title: 'MongoDB', level: 30, class: '' }
		]
	},
	es: {
		sectionTitle: '¿Quién soy?',
		myDescription:
			'<p>Soy Luis Barrantes, front-end developer con experiencia, proactivo, adaptable y con facilidad de aprender nuevos lenguajes y tecnologías, trabajando en convertirme en un full-stack developer. Siempre dispuesto a colaborar y trabajar en equipo.</p><p>Me apasiona la música y los conciertos, viajar, los perros, el aire libre, hacer ejercicio y pasar el tiempo con mis seres queridos.</p>',
		technologies: [
			{ title: 'Front-end', level: 95, class: 'main' },
			{ title: 'Back-end', level: 40, class: 'main' },
			{ title: 'Bases de datos', level: 80, class: 'main' },
			{ title: 'React', level: 80, class: '' },
			{ title: 'PHP', level: 70, class: '' },
			{ title: 'SQL', level: 75, class: '' },
			{ title: 'Adapt Framework', level: 90, class: '' },
			{ title: 'Python', level: 30, class: '' },
			{ title: 'MongoDB', level: 30, class: '' }
		]
	}
};

function AboutMe() {
	const { language } = useContext(LanguageContext);
	const { sectionTitle, myDescription, technologies } = content[language];
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<AboutMePaper elevation={0} square>
			<Grid container justify="center">
				<Grid container item xs={11} md={10}>
					<Fade direction="up" triggerOnce>
						<ResumeSubtitle isDarkMode={isDarkMode}>{sectionTitle}</ResumeSubtitle>
					</Fade>
				</Grid>
				<Grid container item xs={12} sm={10} spacing={2} direction="row" justify="center" alignItems="center">
					<Grid item xs={11} sm={10}>
						<Fade triggerOnce>
							<TextBubblePaper
								elevation={2}
								dangerouslySetInnerHTML={{ __html: myDescription }}
								className="description-bubble"
							/>
						</Fade>
					</Grid>
					<Grid item xs={11} sm={2}>
						<AboutMeAvatar alt="Luis Barrantes" src={avatar} />
					</Grid>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					{technologies.map((tech, i) => (
						<Grid item xs={4} key={`tech-item-${i}`}>
							<ProgressBarContainer>
								<h3>{tech.title}</h3>
								<LinearProgressResume variant="determinate" value={tech.level} className={tech.class} />
							</ProgressBarContainer>
						</Grid>
					))}
				</Grid>
			</Grid>
		</AboutMePaper>
	);
}

export default AboutMe;
