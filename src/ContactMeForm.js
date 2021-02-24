import React, { useState, useEffect, useContext } from 'react';
import { Paper, Grid, TextField, Button, Dialog, DialogTitle } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

import { LanguageContext } from './contexts/language.context';
import { ThemeContext } from './contexts/theme.context';

const ContactMeFormPaper = styled(Paper)`
    margin: 1rem 0;
    padding: 0 1rem;

	.MuiFormLabel-root.Mui-focused {
		color: ${(props) => (props.isDarkMode ? props.theme.textFieldBorderDarkMode : props.theme.textFieldBorderLightMode)};
	}

	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${(props) =>
			props.isDarkMode ? props.theme.textFieldBorderDarkMode : props.theme.textFieldBorderLightMode};
	}
`;

const ContactMeTextField = styled(TextField)`
	.MuiInputBase-root {
		background-color: ${(props) => props.theme.textFieldBg};
	}
`;

const ContactButton = styled(Button)`
    &.MuiButtonBase-root {
        background-color: ${(props) => props.theme.mainButtonColor};
        color: ${(props) => props.theme.mainButtonTextColor};
        &:hover {
            background-color: ${(props) => props.theme.mainButtonColorHover};
        }
    }
`;

const MessageConfirmationDialog = styled(Dialog)`
    &.MuiDialog-root .MuiDialog-paper {
        padding: 20px;
    }
`;

const content = {
	en: {
		nameLabel: 'Name',
		emailLabel: 'Email address',
		subjectLabel: 'Subject',
		messageLabel: 'Message',
		sendButton: 'Send message',
		dialogTitle: 'Message sent',
		dialogText: 'Your message was successfully sent.'
	},
	es: {
		nameLabel: 'Nombre',
		emailLabel: 'Correo electrónico',
		subjectLabel: 'Asunto',
		messageLabel: 'Mensaje',
		sendButton: 'Enviar',
		dialogTitle: 'Mensaje enviado',
		dialogText: 'El mensaje se envió correctamente.'
	}
};

function ContactMeForm() {
	const [ nameValue, handleNameChange, resetName ] = useInputState('');
	const [ emailValue, handleEmailChange, resetEmail ] = useInputState('');
	const [ subjectValue, handleSubjectValue, resetSubject ] = useInputState('');
	const [ messageValue, handleMessageValue, resetMessage ] = useInputState('');

	const [ open, setOpen ] = useState(false);
	const [ messages, setMessages ] = useState([]);

	const { language } = useContext(LanguageContext);
	const { nameLabel, emailLabel, subjectLabel, messageLabel, sendButton, dialogTitle, dialogText } = content[
		language
	];

	const { isDarkMode } = useContext(ThemeContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		// setMessages(() => {
		// 	return [ ...messages, { nameValue, emailValue, subjectValue, messageValue } ];
		// });

		const templateParams = {
			from_name: nameValue + ' (' + emailValue + ')',
			to_name: 'Kike Barrantes',
			message: 'Subject: ' + subjectValue + ' / Message: ' + messageValue
		};

		emailjs.send('service_qd0fz5r', 'template_l1deodu', templateParams, 'user_3AwNnISOAj3mKfNMzdWpd').then(
			function(response) {
				handleDialogOpen();
			},
			function(err) {
				console.log('Error:', err);
			}
		);

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

	return (
		<ContactMeFormPaper elevation={0} isDarkMode={isDarkMode}>
			<form onSubmit={handleSubmit}>
				<Grid container justify="center" alignItems="center" spacing={2}>
					<Grid container item xs={12} md={6}>
						<ContactMeTextField
							value={nameValue}
							onChange={handleNameChange}
							margin="normal"
							label={nameLabel}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={12} md={6}>
						<ContactMeTextField
							value={emailValue}
							onChange={handleEmailChange}
							margin="normal"
							label={emailLabel}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={12} md={12}>
						<ContactMeTextField
							value={subjectValue}
							onChange={handleSubjectValue}
							margin="normal"
							label={subjectLabel}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={12} md={12}>
						<ContactMeTextField
							value={messageValue}
							onChange={handleMessageValue}
							multiline
							rows={5}
							margin="normal"
							label={messageLabel}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={12}>
						<ContactButton type="submit" value="Submit" variant="contained">
							{sendButton}
						</ContactButton>
					</Grid>
				</Grid>
			</form>

			<MessageConfirmationDialog aria-labelledby="dialog-title" open={open} onClose={handleClose}>
				<DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
				<p>{dialogText}</p>
			</MessageConfirmationDialog>
		</ContactMeFormPaper>
	);
}

export default ContactMeForm;
