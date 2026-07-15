import { useContext, useState, useEffect, useRef } from 'react';
import { Avatar, LinearProgress } from '@mui/material';
import { Fade } from 'react-awesome-reveal';

import avatar from './images/lbarrantes_avatar.jpg';
import { technologies } from './data/technologies';
import { pickTranslation } from './utils/pickTranslation';

import { LanguageContext } from './contexts/language.context';
import ResumeSubtitle from './components/ResumeSubtitle';

const AVATAR_SIZE = 120;

const content = {
	en: {
		sectionTitle: 'Who is Luis Barrantes?',
		myDescription:
			"<p>I'm Luis Barrantes, an accomplished and proactive full-stack developer, with the confidence and ability to learn and adapt to new technologies with ease. Working towards improving my skills everyday, including softskills. Always eager to collaborate and work in teams.</p><p>Love music and concerts, traveling, photography, outdoors, dogs, working out and hanging out with my loved ones.</p>",
	},
	es: {
		sectionTitle: '¿Quién es Luis Barrantes?',
		myDescription:
			'<p>Soy Luis Barrantes, full-stack developer experimentado, proactivo, adaptable y con facilidad de aprender nuevos lenguajes y tecnologías, trabajando en mejorar mis "skills" cada día, incluyendo los "softskills". Siempre dispuesto a colaborar y trabajar en equipo.</p><p>Me apasiona la música y los conciertos, viajar, la fotografía, los perros, el aire libre, hacer ejercicio y pasar el tiempo con mis seres queridos.</p>',
	},
};

function AboutMe() {
	const { language } = useContext(LanguageContext);
	const { sectionTitle, myDescription } = pickTranslation(content, language);

	const ref = useRef<HTMLElement>(null);
	const [ isSkillSectionVisible, setSkillSectionVisible ] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (isSkillSectionVisible) return;
			if (ref.current && window.pageYOffset > ref.current.offsetTop) {
				setSkillSectionVisible(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [ isSkillSectionVisible ]);

	return (
		<section ref={ref} className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:h-screen sm:py-0">
			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					<div className="mt-4 flex flex-wrap items-center justify-center gap-4">
						<div className="w-full sm:flex-1">
							<Fade triggerOnce>
								<div
									className="after:content-[''] relative rounded-[30px] bg-bubble-bg px-[30px] py-5 text-right leading-normal text-bubble-font shadow-md after:absolute after:top-[20%] after:right-[-10px] after:hidden after:h-0 after:w-0 after:border-y-[10px] after:border-l-[10px] after:border-y-transparent after:border-l-bubble-bg sm:after:block"
									dangerouslySetInnerHTML={{ __html: myDescription }}
								/>
							</Fade>
						</div>
						<div className="w-full sm:w-auto">
							<Avatar
								alt="Luis Barrantes"
								src={avatar}
								className="mx-auto sm:float-left sm:ml-4"
								sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
							/>
						</div>
					</div>
					<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
						{technologies.map((tech) => (
							<div key={tech.title} className="pt-[25px]">
								<h3>{tech.title}</h3>
								<LinearProgress
									variant="determinate"
									value={isSkillSectionVisible ? tech.level : 0}
									sx={{
										height: 12,
										borderRadius: '5px',
										backgroundColor: 'var(--color-skill-progress-bg)',
										'& .MuiLinearProgress-bar': {
											backgroundColor:
												tech.category === 'main'
													? 'var(--color-skill-progress-main)'
													: 'var(--color-skill-progress-secondary)',
											transition: 'all 1s',
										},
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</Fade>
		</section>
	);
}

export default AboutMe;
