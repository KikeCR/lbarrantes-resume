import React, { useContext } from 'react';
import { Paper, Avatar, Grid, Link, Button } from '@material-ui/core';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';
import avatar from './images/lbarrantes_avatar.jpg'; // Context for this
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { LanguageContext } from './contexts/language.context';

const ProfilePaper = styled(Paper)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
	background-color: #EAE2B7;
`;

const ProfileAvatar = styled(Avatar)`
    &.MuiAvatar-root {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        float: right;
        margin-right: 10%;
    }
`;

const ProfileTitle = styled.h1`margin: 0 0 12px;`;

const SocialContainer = styled.div`
	margin-top: 12px;
	a {
		padding-right: 20px;
		svg {
			color: #fcbf49;
			font-size: 26px;
		}

		&:hover svg {
			color: #f77f00;
		}
	}
`;

const ButtonProfile = styled.div`margin-top: 12px;`;

const ContactButton = styled(Button)`
    &.MuiButtonBase-root {
        background-color: #D62828;
        color: #fff;
        &:hover {
            background-color: #9B1C1C;
        }
    }
`;

const content = {
	en: {
		intro: "I'm a",
		description: [ 'front-end developer.', 'back-end beginner.', 'traveler.', 'gamer.' ],
		contactMeCta: 'Contact me',
		linkedIn: 'https://www.linkedin.com/in/luis-enrique-barrantes-8141995b/',
		instagram: 'https://www.instagram.com/kike.barr/',
		twitter: 'https://twitter.com/barr_kike',
		facebook: 'https://www.facebook.com/kike.barrantes/'
	},
	es: {
		intro: 'Soy',
		description: [ 'front-end developer.', 'aprendiz de back-end.', 'viajero.', 'gamer.' ],
		contactMeCta: 'Contáctame',
		linkedIn: 'https://www.linkedin.com/in/luis-enrique-barrantes-8141995b/',
		instagram: 'https://www.instagram.com/kike.barr/',
		twitter: 'https://twitter.com/barr_kike',
		facebook: 'https://www.facebook.com/kike.barrantes/'
	}
};

function Profile() {
	const { language } = useContext(LanguageContext);
	const { intro, description, contactMeCta, linkedIn, instagram, twitter, facebook } = content[language];
	return (
		<ProfilePaper elevation={0} square>
			<Grid container justify="center">
				<Grid item xs={11} md={5}>
					<ProfileAvatar alt="Luis Barrantes" src={avatar} />
				</Grid>
				<Grid item xs={11} md={7}>
					<ProfileTitle>Luis Barrantes</ProfileTitle>
					<ReactTypingEffect
						staticText={intro}
						text={description}
						speed={100}
						eraseSpeed={100}
						typingDelay={800}
						eraseDelay={1200}
					/>
					<SocialContainer>
						<Link href={linkedIn} target="_blank">
							<LinkedInIcon />
						</Link>
						<Link href={instagram} target="_blank">
							<InstagramIcon />
						</Link>
						<Link href={twitter} target="_blank">
							<TwitterIcon />
						</Link>
						<Link href={facebook} target="_blank">
							<FacebookIcon />
						</Link>
					</SocialContainer>
					<ButtonProfile>
						<ContactButton variant="contained">{contactMeCta}</ContactButton>
					</ButtonProfile>
				</Grid>
			</Grid>
		</ProfilePaper>
	);
}

export default Profile;
