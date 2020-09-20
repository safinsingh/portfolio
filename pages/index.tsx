import Icon from '../components/Icon'
import Meta from '../components/Meta'
import ProjectGrid from '../components/ProjectGrid'
import { endpoint, iconProps, indexProps } from '../lib'
import style from '../styles/Lander.module.scss'

export const getStaticProps = async () => {
	return endpoint()
}

const Lander = (props: indexProps) => {
	const { projects } = props
	return (
		<>
			<Meta />
			<div className={style.root}>
				<div className={style.main}>
					<div className={style.column}>
						<h1 className={style.header}>
							Hi, I&apos;m{' '}
							<span className={style.gradient}>Safin Singh</span>
						</h1>
						<h2 className={style.description}>
							Full-stack Developer, Cybersecurity Competitor, High School
							Student
						</h2>
						<div className={style.socials}>
							{['github', 'linkedin', 'dev', 'email'].map(
								(i: iconProps['icon']) => (
									<Icon icon={i} />
								)
							)}
						</div>
					</div>
					<div className={style.columnCenter}>
						<h2 className={style.subheading}>Projects</h2>
						<ProjectGrid projects={projects} />
					</div>
				</div>
				<div className={style.footer}>
					<p>
						Copyright ©{' '}
						<span className={style.gradient}>Safin Singh</span> 2020 |
						Made with 💙 & Next.js
					</p>
				</div>
			</div>
		</>
	)
}

export default Lander
