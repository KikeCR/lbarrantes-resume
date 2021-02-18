import React, { useState, useEffect } from 'react';
import { Paper, Grid, TextField, Button, Dialog, DialogTitle } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import styled from 'styled-components';

const ContactMeFormPaper = styled(Paper)`
    margin: 1rem 0;
    padding: 0 1rem;
`;

const ContactMeTextField = styled(TextField)`
    .MuiFormLabel-root.Mui-focused {
		color: #497DAD;
	}
	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: #497DAD;
	}
`;

const ContactButton = styled(Button)`
    &.MuiButtonBase-root {
        background-color: #eb1796;
        color: #fff;
        &:hover {
            background-color: #a12870;
        }
    }
`;

const MessageConfirmationDialog = styled(Dialog)`
    &.MuiDialog-root .MuiDialog-paper {
        padding: 20px;
    }
`;

function ContactMeForm() {
	const [ nameValue, handleNameChange, resetName ] = useInputState('');
	const [ emailValue, handleEmailChange, resetEmail ] = useInputState('');
	const [ subjectValue, handleSubjectValue, resetSubject ] = useInputState('');
	const [ messageValue, handleMessageValue, resetMessage ] = useInputState('');

	const [ open, setOpen ] = useState(false);
	const [ messages, setMessages ] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setMessages(() => {
			return [ ...messages, { nameValue, emailValue, subjectValue, messageValue } ];
		});

		resetName();
		resetEmail();
		resetSubject();
		resetMessage();
	};

	const handleDialogOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(
		() => {
			if (messages.length > 0) {
				handleDialogOpen();
				console.log(messages);
			}
		},
		[ messages ]
	);

	return (
		<ContactMeFormPaper elevation={0}>
			<form onSubmit={handleSubmit}>
				<Grid container justify="center" spacing={2}>
					<Grid container item xs={11} md={6}>
						<ContactMeTextField
							value={nameValue}
							onChange={handleNameChange}
							margin="normal"
							label="Name"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={11} md={6}>
						<ContactMeTextField
							value={emailValue}
							onChange={handleEmailChange}
							margin="normal"
							label="Email address"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={11} md={12}>
						<ContactMeTextField
							value={subjectValue}
							onChange={handleSubjectValue}
							margin="normal"
							label="Subject"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={11} md={12}>
						<ContactMeTextField
							value={messageValue}
							onChange={handleMessageValue}
							multiline
							rows={5}
							margin="normal"
							label="Message"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={11} md={12}>
						<ContactButton type="submit" value="Submit" variant="contained">
							Send message
						</ContactButton>
					</Grid>
				</Grid>
			</form>

			<MessageConfirmationDialog aria-labelledby="dialog-title" open={open} onClose={handleClose}>
				<DialogTitle id="dialog-title">Message sent</DialogTitle>
				<p>Your message was successfully sent.</p>
			</MessageConfirmationDialog>
		</ContactMeFormPaper>
	);
}

export default ContactMeForm;
