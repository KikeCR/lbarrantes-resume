import React, { useContext } from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot
} from '@material-ui/lab';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import styled from 'styled-components';
import { LanguageContext } from './contexts/language.context';

const ExperiencePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimelinePaper = styled(Paper)`
    &.MuiPaper-root.timeline-paper {
		background-color: #003049;
		padding: 3rem 0;
		border-radius: 20px;
		margin-top: 1rem;
	}
`;

const ExperienceTimeline = styled(Timeline)`
    .MuiTimelineItem-root {
		.MuiTimelineDot-root {
			background-color: #D62828;
		}
		.MuiTimelineConnector-root {
			background-color: #D62828;
		}
	}

	.MuiTimelineContent-root .MuiPaper-root {
		background-color: transparent;
	}

	.MuiTypography-root {
		color: #fff;
	}
`;

const TimestampTypography = styled(Typography)`
	&.MuiTypography-root {
		color: #EAE2B7;
	}
`;

const ResumeSubtitle = styled.h2``;

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
				role: 'Bachelor in Informática Empresarial',
				timestamp: '2008 - 2012',
				category: 'edu'
			},
			{
				company: 'Hewlett-Packard',
				role: 'Reporting Analyst / Developer',
				timestamp: '2013 - 2014',
				category: 'work'
			},
			{ company: 'Hangar Worldwide', role: 'Front-end developer', timestamp: '2014 - 2017', category: 'work' },
			{
				company: 'SweetRush Inc.',
				role: 'Tech Lead / Web Engineer',
				timestamp: '2017 - currently',
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
				role: 'Bachiller en Informática Empresarial',
				timestamp: '2008 - 2012',
				category: 'edu'
			},
			{
				company: 'Hewlett-Packard',
				role: 'Reporting Analyst / Developer',
				timestamp: '2013 - 2014',
				category: 'work'
			},
			{ company: 'Hangar Worldwide', role: 'Front-end developer', timestamp: '2014 - 2017', category: 'work' },
			{
				company: 'SweetRush Inc.',
				role: 'Tech Lead / Web Engineer',
				timestamp: '2017 - actualmente',
				category: 'work'
			}
		]
	}
};

function Experience() {
	const { language } = useContext(LanguageContext);
	const { sectionTitle, experiences } = content[language];
	return (
		<ExperiencePaper elevation={0} square>
			<Grid container justify="center">
				<Grid container item xs={11} md={10}>
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={11} md={11}>
						<TimelinePaper elevation={0} className="timeline-paper">
							<ExperienceTimeline align="alternate">
								{experiences.map((exp, i) => (
									<TimelineItem>
										<TimelineOppositeContent>
											<TimestampTypography variant="body2" color="textSecondary">
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
						</TimelinePaper>
					</Grid>
				</Grid>
			</Grid>
		</ExperiencePaper>
	);
}

export default Experience;
