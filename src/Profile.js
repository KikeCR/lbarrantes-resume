import React from 'react';
import { Paper, Avatar, Grid, Link, Button } from '@material-ui/core';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';
import avatar from './images/lbarrantes_avatar.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const ProfilePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileAvatar = styled(Avatar)`
    margin: 0 auto;
    width: 100px !important;
    height: 100px !important;
    float: right;
    margin-right: 10%;
`;

const ProfileTitle = styled.h1`margin: 0 0 12px;`;

const SocialContainer = styled.div`
	margin-top: 12px;
	a {
		padding-right: 20px;
		svg {
			color: black;
			font-size: 26px;
		}
	}
`;

const ButtonProfile = styled.div`margin-top: 12px;`;

function Profile() {
	return (
		<ProfilePaper elevation={0}>
			<Grid container justify="center">
				<Grid item xs={11} md={5}>
					<ProfileAvatar alt="Luis Barrantes" src={avatar} />
				</Grid>
				<Grid item xs={11} md={7}>
					<ProfileTitle>Luis Barrantes</ProfileTitle>
					<ReactTypingEffect
						staticText="I'm a"
						text={[ 'front-end developer.', 'back-end beginner.', 'traveler.' ]}
						speed={100}
						eraseSpeed={100}
						typingDelay={800}
						eraseDelay={1200}
					/>
					<SocialContainer>
						<Link href="#" target="_blank">
							<LinkedInIcon />
						</Link>
						<Link href="#" target="_blank">
							<InstagramIcon />
						</Link>
						<Link href="#" target="_blank">
							<TwitterIcon />
						</Link>
						<Link href="#" target="_blank">
							<FacebookIcon />
						</Link>
					</SocialContainer>
					<ButtonProfile>
						<Button variant="contained">Contact me</Button>
					</ButtonProfile>
				</Grid>
			</Grid>
		</ProfilePaper>
	);
}

export default Profile;
