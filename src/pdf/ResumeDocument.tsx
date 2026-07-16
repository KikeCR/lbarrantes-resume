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
		<Document>
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
										{entry.role} — {entry.company.replace('\n', ' ')}
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
									{entry.role} — {entry.company.replace('\n', ' ')}
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
		paddingVertical: 40,
		paddingHorizontal: 46,
		fontFamily: 'Helvetica',
		fontSize: 10,
		color: '#1a1a1a',
	},
	header: {
		marginBottom: 12,
	},
	name: {
		fontSize: 22,
		fontFamily: 'Helvetica-Bold',
		color: ACCENT_COLOR,
	},
	headline: {
		fontSize: 12.5,
		marginTop: 2,
		color: '#333333',
	},
	headerRule: {
		height: 2,
		width: 50,
		backgroundColor: ACCENT_COLOR,
		marginTop: 8,
		marginBottom: 8,
	},
	contactRow: {
		flexDirection: 'row',
		fontSize: 9,
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
		fontSize: 10,
		lineHeight: 1.4,
		marginBottom: 14,
	},
	section: {
		marginBottom: 12,
	},
	sectionTitle: {
		fontSize: 12,
		fontFamily: 'Helvetica-Bold',
		textTransform: 'uppercase',
		letterSpacing: 0.5,
		color: ACCENT_COLOR,
		marginBottom: 7,
		borderBottomWidth: 1.5,
		borderBottomColor: ACCENT_COLOR,
		paddingBottom: 3,
	},
	entry: {
		marginBottom: 7,
	},
	entryHeaderRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	entryTitle: {
		fontFamily: 'Helvetica-Bold',
		fontSize: 10,
	},
	entryDates: {
		fontSize: 9,
		color: '#555555',
	},
	bullet: {
		fontSize: 9.5,
		lineHeight: 1.4,
		marginTop: 2,
		marginLeft: 10,
	},
	skillGroupRow: {
		flexDirection: 'row',
		marginBottom: 4,
	},
	skillGroupHeading: {
		fontFamily: 'Helvetica-Bold',
		fontSize: 9.5,
		width: 130,
	},
	skillGroupItems: {
		fontSize: 9.5,
		flex: 1,
	},
})
