import React from 'react';
import { Paper, Avatar } from '@material-ui/core';
import styled from 'styled-components';
import avatar from './images/lbarrantes_avatar.jpg';

const ProfilePaper = styled(Paper)`
    text-align: center;
`;

const ProfileAvatar = styled(Avatar)`
    margin: 0 auto;
    width: 100px !important;
    height: 100px !important;
`;

function Profile() {
	return (
		<ProfilePaper elevation={0}>
			<ProfileAvatar alt="Luis Barrantes" src={avatar} />
			<h1>Luis Barrantes</h1>
			<div>SOCIAL</div>
		</ProfilePaper>
	);
}

export default Profile;
