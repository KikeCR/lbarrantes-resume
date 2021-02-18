import React from 'react';
import { Paper, Avatar, Grid, LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import avatar from './images/lbarrantes_avatar.jpg'; // Context for this

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
        color: white;
        background-color: #853565;
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

function AboutMe() {
	return (
		<AboutMePaper elevation={0}>
			<Grid container justify="center">
				<Grid container item xs={11} md={10}>
					<ResumeSubtitle>About me</ResumeSubtitle>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={11} md={10}>
						<TextBubblePaper elevation={2}>
							<p>
								I'm Luis Barrantes, an accomplished and proactive front-end developer, with the ability
								to learn and adapt to new technologies with ease. Working towards becoming a full-stack
								developer. Always eager to collaborate and work in teams.
							</p>
							<p>
								Love music and concerts, traveling, outdoors, dogs, working out and hanging out with the
								people I care about.
							</p>
						</TextBubblePaper>
					</Grid>
					<Grid item xs={11} md={2}>
						<AboutMeAvatar alt="Luis Barrantes" src={avatar} />
					</Grid>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>Front-end</h3>
							<LinearProgressResume variant="determinate" value={95} className="main" />
						</ProgressBarContainer>
					</Grid>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>Back-end</h3>
							<LinearProgressResume variant="determinate" value={40} className="main" />
						</ProgressBarContainer>
					</Grid>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>Databases</h3>
							<LinearProgressResume variant="determinate" value={85} className="main" />
						</ProgressBarContainer>
					</Grid>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>React</h3>
							<LinearProgressResume variant="determinate" value={85} />
						</ProgressBarContainer>
					</Grid>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>PHP</h3>
							<LinearProgressResume variant="determinate" value={80} />
						</ProgressBarContainer>
					</Grid>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>SQL</h3>
							<LinearProgressResume variant="determinate" value={85} />
						</ProgressBarContainer>
					</Grid>
				</Grid>
				<Grid container item xs={11} md={10} spacing={2}>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>Adapt Framework</h3>
							<LinearProgressResume variant="determinate" value={95} />
						</ProgressBarContainer>
					</Grid>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>Python</h3>
							<LinearProgressResume variant="determinate" value={30} />
						</ProgressBarContainer>
					</Grid>
					<Grid item xs={4}>
						<ProgressBarContainer>
							<h3>MongoDB</h3>
							<LinearProgressResume variant="determinate" value={25} />
						</ProgressBarContainer>
					</Grid>
				</Grid>
			</Grid>
		</AboutMePaper>
	);
}

export default AboutMe;
