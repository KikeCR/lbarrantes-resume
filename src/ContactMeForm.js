import React, { useState, useContext } from 'react';
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
		color: ${(props) => (props.isDarkMode ? props.theme.textFieldBorderDark : props.theme.textFieldBorderLight)};
	}

	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${(props) => (props.isDarkMode ? props.theme.textFieldBorderDark : props.theme.textFieldBorderLight)};
	}
`;

const ContactMeTextField = styled(TextField)`
	.MuiInputBase-root {
		background-color: ${(props) => (props.isDarkMode ? props.theme.textFieldBgDark : props.theme.textFieldBgLight)};
	}
	.MuiInputLabel-outlined, .MuiOutlinedInput-input {
		color: ${(props) => (props.isDarkMode ? props.theme.textFieldLabelDark : props.theme.textFieldLabelLight)};
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
        padding: 50px 50px;
		background-color: ${(props) => (props.isDarkMode ? props.theme.darkModeBg : props.theme.lightModeBg)};
		color: ${(props) => (props.isDarkMode ? props.theme.darkModeFontColor : props.theme.lightModeFontColor)};

		p {
			margin: 5px 0;
		}

		.signature {
			text-align: right;
			margin-top: 15px;
			span {
				font-style: italic;
			}
		}
    }

	.MuiDialogTitle-root {
		padding: 16px 0;
	}
`;

const content = {
	en: {
		nameLabel: 'Name',
		emailLabel: 'Email address',
		subjectLabel: 'Subject',
		messageLabel: 'Message',
		sendButton: 'Send message',
		dialogTitle: 'Message sent 🚀',
		dialogText:
			"<p>Hey, your message was successfully sent.</p> <p>Thanks for reaching out to me, we'll be in touch!</p> <p class='signature'>- <span>Luis Barrantes</span></p>"
	},
	es: {
		nameLabel: 'Nombre',
		emailLabel: 'Correo electrónico',
		subjectLabel: 'Asunto',
		messageLabel: 'Mensaje',
		sendButton: 'Enviar',
		dialogTitle: 'Mensaje enviado 🚀',
		dialogText:
			"<p>El mensaje fue enviado satisfactoriamente.</p> <p>Gracias por contactarme, estaré en contacto pronto.</p> <p class='signature'>- <span>Luis Barrantes</span></p>"
	}
};

function ContactMeForm() {
	const [ nameValue, handleNameChange, resetName ] = useInputState('');
	const [ emailValue, handleEmailChange, resetEmail ] = useInputState('');
	const [ subjectValue, handleSubjectValue, resetSubject ] = useInputState('');
	const [ messageValue, handleMessageValue, resetMessage ] = useInputState('');

	const [ open, setOpen ] = useState(false);

	const { language } = useContext(LanguageContext);
	const { nameLabel, emailLabel, subjectLabel, messageLabel, sendButton, dialogTitle, dialogText } = content[
		language
	];

	const { isDarkMode } = useContext(ThemeContext);

	const handleSubmit = (e) => {
		e.preventDefault();

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
							isDarkMode={isDarkMode}
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
							isDarkMode={isDarkMode}
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
							isDarkMode={isDarkMode}
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
							isDarkMode={isDarkMode}
						/>
					</Grid>
					<Grid container item xs={12}>
						<ContactButton type="submit" value="Submit" variant="contained">
							{sendButton}
						</ContactButton>
					</Grid>
				</Grid>
			</form>

			<MessageConfirmationDialog
				aria-labelledby="dialog-title"
				open={open}
				onClose={handleClose}
				isDarkMode={isDarkMode}
			>
				<DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
				<div dangerouslySetInnerHTML={{ __html: dialogText }} />
			</MessageConfirmationDialog>
		</ContactMeFormPaper>
	);
}

export default ContactMeForm;
