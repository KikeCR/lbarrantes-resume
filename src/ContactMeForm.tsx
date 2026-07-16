import { useContext, useState, type FormEvent } from 'react';
import { Paper, Grid, TextField, Dialog, DialogTitle } from '@mui/material';
import emailjs from '@emailjs/browser';

import useInputState from './hooks/useInputState';
import { LanguageContext } from './contexts/language.context';
import ContactButton from './components/ContactButton';

const EMAILJS_SERVICE_ID = 'service_qd0fz5r';
const EMAILJS_TEMPLATE_ID = 'template_l1deodu';
const EMAILJS_PUBLIC_KEY = 'user_3AwNnISOAj3mKfNMzdWpd';
const RECIPIENT_NAME = 'Kike Barrantes';

const textFieldSx = {
	'& .MuiInputBase-root': { backgroundColor: 'var(--color-textfield-bg)' },
	'& .MuiInputLabel-outlined, & .MuiOutlinedInput-input': { color: 'var(--color-textfield-label)' },
};

const content = {
	en: {
		nameLabel: 'Name',
		emailLabel: 'Email address',
		subjectLabel: 'Subject',
		messageLabel: 'Message',
		sendButton: 'Send message',
		dialogTitle: 'Message sent 🚀',
		dialogText:
			"<p>Hey, your message was successfully sent.</p> <p>Thanks for reaching out to me, we'll be in touch!</p> <p class='signature'>- <span>Luis Barrantes</span></p>",
	},
	es: {
		nameLabel: 'Nombre',
		emailLabel: 'Correo electrónico',
		subjectLabel: 'Asunto',
		messageLabel: 'Mensaje',
		sendButton: 'Enviar',
		dialogTitle: 'Mensaje enviado 🚀',
		dialogText:
			"<p>El mensaje fue enviado satisfactoriamente.</p> <p>Gracias por contactarme, estaré en contacto pronto.</p> <p class='signature'>- <span>Luis Barrantes</span></p>",
	},
};

function ContactMeForm() {
	const [ nameValue, handleNameChange, resetName ] = useInputState('');
	const [ emailValue, handleEmailChange, resetEmail ] = useInputState('');
	const [ subjectValue, handleSubjectValue, resetSubject ] = useInputState('');
	const [ messageValue, handleMessageValue, resetMessage ] = useInputState('');

	const [ open, setOpen ] = useState(false);

	const { language } = useContext(LanguageContext);
	const { nameLabel, emailLabel, subjectLabel, messageLabel, sendButton, dialogTitle, dialogText } =
		content[language];

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const templateParams = {
			from_name: nameValue + ' (' + emailValue + ')',
			to_name: RECIPIENT_NAME,
			message: 'Subject: ' + subjectValue + ' / Message: ' + messageValue,
		};

		emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY).then(
			() => setOpen(true),
			(err) => console.log('Error:', err),
		);

		resetName();
		resetEmail();
		resetSubject();
		resetMessage();
	};

	const handleClose = () => setOpen(false);

	return (
		<Paper
			elevation={0}
			className="my-4 px-4"
			sx={{
				// `&.MuiPaper-elevation0.MuiPaper-root` (not a flat rule) is required to
				// out-specificity ResumeApp.jsx's legacy `.MuiPaper-root { background-color }`
				// descendant selector, which this Paper also matches. Drop this once Phase 6e
				// removes ResumeApp's styled-components cascade.
				'&.MuiPaper-elevation0.MuiPaper-root': {
					backgroundColor: 'transparent',
					color: 'var(--color-font)',
				},
				'& .MuiFormLabel-root.Mui-focused': { color: 'var(--color-textfield-border)' },
				'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: 'var(--color-textfield-border)',
				},
			}}
		>
			<form onSubmit={handleSubmit}>
				<Grid container justifyContent="center" alignItems="center" spacing={2}>
					<Grid container item xs={12} md={6}>
						<TextField
							value={nameValue}
							onChange={handleNameChange}
							margin="normal"
							label={nameLabel}
							variant="outlined"
							fullWidth
							required
							sx={textFieldSx}
						/>
					</Grid>
					<Grid container item xs={12} md={6}>
						<TextField
							value={emailValue}
							onChange={handleEmailChange}
							margin="normal"
							label={emailLabel}
							variant="outlined"
							fullWidth
							required
							sx={textFieldSx}
						/>
					</Grid>
					<Grid container item xs={12} md={12}>
						<TextField
							value={subjectValue}
							onChange={handleSubjectValue}
							margin="normal"
							label={subjectLabel}
							variant="outlined"
							fullWidth
							sx={textFieldSx}
						/>
					</Grid>
					<Grid container item xs={12} md={12}>
						<TextField
							value={messageValue}
							onChange={handleMessageValue}
							multiline
							rows={5}
							margin="normal"
							label={messageLabel}
							variant="outlined"
							fullWidth
							required
							sx={textFieldSx}
						/>
					</Grid>
					<Grid container item xs={12}>
						<ContactButton type="submit" variant="contained">
							{sendButton}
						</ContactButton>
					</Grid>
				</Grid>
			</form>

			<Dialog
				aria-labelledby="dialog-title"
				open={open}
				onClose={handleClose}
				sx={{
					'& .MuiDialog-paper': {
						padding: '50px',
						backgroundColor: 'var(--color-bg)',
						color: 'var(--color-font)',
					},
					'& .MuiDialogTitle-root': { padding: '16px 0' },
				}}
			>
				<DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
				<div
					className="[&_.signature]:mt-[15px] [&_.signature]:text-right [&_.signature_span]:italic [&_p]:my-[5px]"
					dangerouslySetInnerHTML={{ __html: dialogText }}
				/>
			</Dialog>
		</Paper>
	);
}

export default ContactMeForm;
