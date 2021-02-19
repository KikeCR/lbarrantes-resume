import React, { useContext } from 'react';
import { Paper, Avatar, Grid, LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import avatar from './images/lbarrantes_avatar.jpg'; // Context for this
import { LanguageContext } from './contexts/language.context';

const AboutMePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ResumeSubtitle = styled.h2``;

const AboutMeAvatar = styled(Avatar)`
    &.MuiAvatar-root {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        float: left;
        margin-left: 10%;
    }
`;

const TextBubblePaper = styled(Paper)`
    position: relative;
    &.MuiPaper-root {
        padding: 20px 30px;
		color: #fff;
        background-color: #853565 !important;
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
        border-left-color: #853565;
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
        background-color: #EB1796;
    }

    &.main.MuiLinearProgress-colorPrimary{
        background-color: #FCD9EE;
    }

    .MuiLinearProgress-barColorPrimary {
        background-color: #A12870;
    }

    &.MuiLinearProgress-colorPrimary{
        background-color: #FCD9EE;
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
			{ title: 'React', level: 70, class: '' },
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
			{ title: 'React', level: 70, class: '' },
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
	return (
		<AboutMePaper elevation={0}>
			<Grid container justify="center">
				<Grid container item xs={11} md={10}>
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={11} md={10}>
						<TextBubblePaper elevation={2} dangerouslySetInnerHTML={{ __html: myDescription }} />
					</Grid>
					<Grid item xs={11} md={2}>
						<AboutMeAvatar alt="Luis Barrantes" src={avatar} />
					</Grid>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					{technologies.map((tech) => (
						<Grid item xs={4}>
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
