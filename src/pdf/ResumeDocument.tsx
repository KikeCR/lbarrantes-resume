import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer'

import { experiences } from '../data/experience'
import { resumeContent } from '../data/resumeContent'
import { CONTACT_LINKS } from '../data/contactLinks'
import type { Language } from '../contexts/language.context'

interface ResumeDocumentProps {
	language: Language
}

// Single-column, linear layout by design: react-pdf's Timeline-style multi-column
// tricks don't translate to print, and a single column is the safest choice for
// ATS parsers, which read PDF text in stream order.
export const ResumeDocument = ({ language }: ResumeDocumentProps) => {
	const content = resumeContent[language]

	const workEntries = experiences
		.filter((entry) => entry.category === 'work')
		.slice()
		.reverse()
	const eduEntries = experiences
		.filter((entry) => entry.category === 'edu')
		.slice()
		.reverse()

	return (
		<Document
			title={`Luis Barrantes - ${content.headline}`}
			author="Luis Barrantes"
			subject="Resume"
			creator="luisbarrantes.com"
			keywords="Luis Barrantes, Full-Stack Engineer, React, TypeScript, Python, Django, AI, LLM, RAG"
		>
			<Page size="LETTER" style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.name}>Luis Barrantes</Text>
					<Text style={styles.headline}>{content.headline}</Text>
					<View style={styles.headerRule} />
					<View style={styles.contactRow}>
						<Link
							style={styles.contactLink}
							src={`tel:${CONTACT_LINKS.phone.replace(/[\s-]/g, '')}`}
						>
							{CONTACT_LINKS.phone}
						</Link>
						<Text style={styles.contactSeparator}>|</Text>
						<Link style={styles.contactLink} src={`mailto:${CONTACT_LINKS.email}`}>
							{CONTACT_LINKS.email}
						</Link>
						<Text style={styles.contactSeparator}>|</Text>
						<Link style={styles.contactLink} src={CONTACT_LINKS.github}>
							{CONTACT_LINKS.github.replace('https://', '')}
						</Link>
						<Text style={styles.contactSeparator}>|</Text>
						<Link style={styles.contactLink} src={CONTACT_LINKS.linkedIn}>
							{CONTACT_LINKS.linkedIn.replace('https://', '')}
						</Link>
					</View>
				</View>

				<Text style={styles.summary}>{content.summary}</Text>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{content.experienceLabel}</Text>
					{workEntries.map((entry) => {
						const role = content.roles.find(
							(r) => r.experienceId === entry.id,
						)
						return (
							<View key={entry.id} style={styles.entry} wrap={false}>
								<View style={styles.entryHeaderRow}>
									<Text style={styles.entryTitle}>
										{entry.role} - {entry.company.replace('\n', ' ')}
									</Text>
									<Text style={styles.entryDates}>
										{entry.start} - {entry.end}
									</Text>
								</View>
								{role?.bullets.map((bullet, i) => (
									<Text key={i} style={styles.bullet}>
										• {bullet}
									</Text>
								))}
							</View>
						)
					})}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{content.aiLlmLabel}</Text>
					{content.aiLlmBullets.map((bullet, i) => (
						<Text key={i} style={styles.bullet}>
							• {bullet}
						</Text>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{content.skillsLabel}</Text>
					{content.skillGroups.map((group) => (
						<View key={group.heading} style={styles.skillGroupRow}>
							<Text style={styles.skillGroupHeading}>{group.heading}:</Text>
							<Text style={styles.skillGroupItems}>
								{group.items.join(', ')}
							</Text>
						</View>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{content.educationLabel}</Text>
					{eduEntries.map((entry) => (
						<View key={entry.id} style={styles.entry} wrap={false}>
							<View style={styles.entryHeaderRow}>
								<Text style={styles.entryTitle}>
									{entry.role} - {entry.company.replace('\n', ' ')}
								</Text>
								<Text style={styles.entryDates}>
									{entry.start} - {entry.end}
								</Text>
							</View>
						</View>
					))}
				</View>
			</Page>
		</Document>
	)
}

const ACCENT_COLOR = '#c1533d'

const styles = StyleSheet.create({
	page: {
		paddingVertical: 24,
		paddingHorizontal: 42,
		fontFamily: 'Helvetica',
		fontSize: 9.5,
		color: '#1a1a1a',
	},
	header: {
		marginBottom: 8,
	},
	name: {
		fontSize: 20,
		fontFamily: 'Helvetica-Bold',
		color: ACCENT_COLOR,
	},
	headline: {
		fontSize: 11.5,
		marginTop: 1,
		color: '#333333',
	},
	headerRule: {
		height: 2,
		width: 50,
		backgroundColor: ACCENT_COLOR,
		marginTop: 5,
		marginBottom: 5,
	},
	contactRow: {
		flexDirection: 'row',
		fontSize: 8.5,
	},
	contactLink: {
		color: '#1a1a1a',
		textDecoration: 'none',
	},
	contactSeparator: {
		marginHorizontal: 6,
		color: '#999999',
	},
	summary: {
		fontSize: 9.5,
		lineHeight: 1.3,
		marginBottom: 8,
	},
	section: {
		marginBottom: 6,
	},
	sectionTitle: {
		fontSize: 10.5,
		fontFamily: 'Helvetica-Bold',
		textTransform: 'uppercase',
		letterSpacing: 0.5,
		color: ACCENT_COLOR,
		marginBottom: 4,
		borderBottomWidth: 1.5,
		borderBottomColor: ACCENT_COLOR,
		paddingBottom: 2,
	},
	entry: {
		marginBottom: 3,
	},
	entryHeaderRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	entryTitle: {
		fontFamily: 'Helvetica-Bold',
		fontSize: 9.5,
	},
	entryDates: {
		fontSize: 8.5,
		color: '#555555',
	},
	bullet: {
		fontSize: 9,
		lineHeight: 1.2,
		marginTop: 0.75,
		marginLeft: 10,
	},
	skillGroupRow: {
		flexDirection: 'row',
		marginBottom: 2,
	},
	skillGroupHeading: {
		fontFamily: 'Helvetica-Bold',
		fontSize: 9,
		width: 115,
	},
	skillGroupItems: {
		fontSize: 9,
		flex: 1,
	},
})
