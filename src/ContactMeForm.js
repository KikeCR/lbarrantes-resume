import React, { useState, useEffect, useContext } from 'react';
import { Paper, Grid, TextField, Button, Dialog, DialogTitle } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import styled from 'styled-components';
import { LanguageContext } from './contexts/language.context';
import { ThemeContext } from './contexts/theme.context';

const ContactMeFormPaper = styled(Paper)`
    margin: 1rem 0;
    padding: 0 1rem;

	.MuiFormLabel-root.Mui-focused {
		color: ${(props) => (props.isDarkMode ? '#F77F00' : '#003049')};
	}

	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${(props) => (props.isDarkMode ? '#F77F00' : '#003049')};
	}
`;

const ContactMeTextField = styled(TextField)`
	.MuiInputBase-root {
		background-color: #fff;
	}
`;

const ContactButton = styled(Button)`
    &.MuiButtonBase-root {
		background-color: #D62828;
        color: #fff;
        &:hover {
            background-color: #9B1C1C;
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
		<ContactMeFormPaper elevation={0} isDarkMode={isDarkMode}>
			<form onSubmit={handleSubmit}>
				<Grid container justify="center" spacing={2}>
					<Grid container item xs={11} md={6}>
						<ContactMeTextField
							value={nameValue}
							onChange={handleNameChange}
							margin="normal"
							label={nameLabel}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={11} md={6}>
						<ContactMeTextField
							value={emailValue}
							onChange={handleEmailChange}
							margin="normal"
							label={emailLabel}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={11} md={12}>
						<ContactMeTextField
							value={subjectValue}
							onChange={handleSubjectValue}
							margin="normal"
							label={subjectLabel}
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
							label={messageLabel}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid container item xs={11} md={12}>
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
