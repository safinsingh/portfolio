import { v4 as uuidv4 } from 'uuid'

import Card from '../components/Card'
import Icon from '../components/Icon'
import Meta from '../components/Meta'
import { card, endpoint, indexProps } from '../lib'
import style from '../styles/Lander.module.scss'

export async function getStaticProps() {
	return endpoint()
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
							{projects.length !== 0 ? (
								projects.map((p: card) => <Card project={p} key={uuidv4()} />)
							) : (
								<p>
									Oh no! It looks like this site has been rate limited for its
									GitHub GraphQL Queries! Come back in an hour or so, sorry!
								</p>
							)}
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
