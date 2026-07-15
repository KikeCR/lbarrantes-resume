import React, { useContext } from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

import { LanguageContext } from './contexts/language.context';
import { ThemeContext } from './contexts/theme.context';
import ResumeSubtitle from './components/ResumeSubtitle';

const ExperiencePaper = styled(Paper)`
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

const TimelinePaper = styled(Paper)`
    &.MuiPaper-root.timeline-paper {
		background-color: ${(props) => (props.isDarkMode ? props.theme.timelineDarkBg : props.theme.timelineLightBg)};
		padding: 3rem 0;
		border-radius: 20px;
		margin-top: 1rem;

		@media (max-width: 599px) {
			padding: 1.5rem 0;
		}
	}
`;

const ExperienceTimeline = styled(Timeline)`
    .MuiTimelineItem-root {
		.MuiTimelineDot-root {
			background-color: ${(props) => props.theme.timelineIconColor};
		}
		.MuiTimelineConnector-root {
			background-color: ${(props) => props.theme.timelineConnectorColor};
		}
	}

	.MuiTimelineContent-root .MuiPaper-root {
		background-color: transparent;
	}

	.MuiTypography-root {
		color: ${(props) => props.theme.timelineText};
	}

	@media (max-width: 599px) {
		.MuiTimelineItem-positionAlternate:nth-child(even) {
			flex-direction: initial;
			.MuiTimelineItem-content {
				text-align: left;
			}
			.MuiTimelineItem-oppositeContent {
				text-align: right;
			}
		}

		.MuiTimelineOppositeContent-root {
			min-width: 18%;
			padding: 0 10px 0 0;
		}

		.MuiTimelineSeparator-root {
			min-width: 10%;
		}

		.MuiTimelineItem-content {
			min-width: 50%;
		}
  	}
`;

const TimestampTypography = styled(Typography)`
	&.MuiTypography-root {
		color: ${(props) => props.theme.timelineTimeStampTextColor};
		margin-top: 10px;

		@media (max-width: 599px) {
			margin-top: 12px;
		}
	}
`;

const content = {
	en: {
		sectionTitle: 'Education & Experience',
		experiences: [
			{
				company: 'Centro Cultural Costarricense Norteamericano',
				role: 'English Now / Advanced English',
				timestamp: '2007 - 2008',
				category: 'edu'
			},
			{
				company: 'Universidad de Costa Rica',
				role: 'Informática Empresarial',
				timestamp: '2008 - 2013',
				category: 'edu'
			},
			{
				company: 'Hewlett-Packard',
				role: 'Reporting Analyst / Developer',
				timestamp: '2013 - 2014',
				category: 'work'
			},
			{ company: 'Hangar Worldwide\n(Critical Mass Latam)', role: 'Front-end developer', timestamp: '2014 - 2017', category: 'work' },
			{
				company: 'SweetRush Inc.',
				role: 'Tech Lead / Software Engineer',
				timestamp: '2017 - 2021',
				category: 'work'
			},
			{
				company: 'Thoropass',
				role: 'Software Engineer',
				timestamp: '2021 - 2026',
				category: 'work'
			}
		]
	},
	es: {
		sectionTitle: 'Educación y experiencia',
		experiences: [
			{
				company: 'Centro Cultural Costarricense Norteamericano',
				role: 'English Now / Advanced English',
				timestamp: '2007 - 2008',
				category: 'edu'
			},
			{
				company: 'Universidad de Costa Rica',
				role: 'Informática Empresarial',
				timestamp: '2008 - 2013',
				category: 'edu'
			},
			{
				company: 'Hewlett-Packard',
				role: 'Reporting Analyst / Developer',
				timestamp: '2013 - 2014',
				category: 'work'
			},
			{ company: 'Hangar Worldwide\n(Critical Mass Latam)', role: 'Front-end developer', timestamp: '2014 - 2017', category: 'work' },
			{
				company: 'SweetRush Inc.',
				role: 'Tech Lead / Software Engineer',
				timestamp: '2017 - 2021',
				category: 'work'
			},
			{
				company: 'Thoropass',
				role: 'Software Engineer',
				timestamp: '2021 - 2026',
				category: 'work'
			}
		]
	}
};

function Experience() {
	const { language } = useContext(LanguageContext);
	const { sectionTitle, experiences } = content[language];
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<ExperiencePaper elevation={0} square>
			<Grid container justifyContent="center">
				<Grid container item xs={11} md={10}>
					<Fade direction="up" triggerOnce>
						<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					</Fade>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2} direction="column" alignItems="center">
					<Grid item xs={12} sm={11}>
						<TimelinePaper elevation={0} className="timeline-paper" isDarkMode={isDarkMode}>
							<Fade duration="2000" direction="up" triggerOnce>
								<ExperienceTimeline position="alternate">
									{experiences.map((exp, i) => (
										<TimelineItem key={`exp-item-${i}`}>
											<TimelineOppositeContent>
												<TimestampTypography variant="body2" color="text.secondary">
													{exp.timestamp}
												</TimestampTypography>
											</TimelineOppositeContent>
											<TimelineSeparator>
												<TimelineDot color="primary">
													{exp.category === 'edu' ? <SchoolIcon /> : <WorkIcon />}
												</TimelineDot>
												{i < experiences.length - 1 && <TimelineConnector />}
											</TimelineSeparator>
											<TimelineContent>
												<Paper elevation={0}>
													<Typography variant="h6" component="h3">
														{exp.company}
													</Typography>
													<Typography>{exp.role}</Typography>
												</Paper>
											</TimelineContent>
										</TimelineItem>
									))}
								</ExperienceTimeline>
							</Fade>
						</TimelinePaper>
					</Grid>
				</Grid>
			</Grid>
		</ExperiencePaper>
	);
}

export default Experience;
