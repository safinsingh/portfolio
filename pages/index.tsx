import Card from '../components/Card'
import Icon from '../components/Icon'
import Meta from '../components/Meta'
import server from '../config'
import { card, indexProps } from '../lib'
import style from '../styles/Lander.module.scss'

export async function getStaticProps() {
	const projects = await fetch(`${server}/api`)
	const ret = await projects.json()
	return ret
}

export default function Lander(props: indexProps) {
	const { projects } = props
	return (
		<>
			<Meta />
			<div className={style.root}>
				<div className={style.main}>
					<div className={style.column}>
						<h1 className={style.header}>
							Hi, I&apos;m <span className={style.gradient}>Safin Singh</span>
						</h1>
						<h2 className={style.description}>
							Full-stack Developer, Cybersecurity Competitor, High School
							Student
						</h2>
						<div className={style.socials}>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/safinsingh"
								className="socialA"
							>
								<Icon icon="github" />
							</a>
							<a
								href="https://www.linkedin.com/in/safinsingh"
								className="socialA"
							>
								<Icon icon="linkedin" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://dev.to/safinsingh"
								className="socialA"
							>
								<Icon icon="dev" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="mailto:safin.singh@gmail.com"
								className="socialA"
							>
								<Icon icon="email" />
							</a>
						</div>
					</div>
					<div className={style.columnCenter}>
						<h2 className={style.subheading}>Projects</h2>
						<div className={style.projectGrid}>
							{projects.map((p: card) => (
								<Card project={p} />
							))}
						</div>
					</div>
				</div>
				<div className={style.footer}>
					<p>
						Copyright © <span className={style.gradient}>Safin Singh</span> 2020
						| Made with 💙 & Next.js
					</p>
				</div>
			</div>
		</>
	)
}
