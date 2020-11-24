import { v4 } from 'uuid'

import Footer from '../components/Footer'
import Icon from '../components/Icon'
import Meta from '../components/Meta'
import ProjectGrid from '../components/ProjectGrid'
import { iconProps, icons, indexProps } from '../lib/types'
import style from '../styles/Lander.module.scss'
import { endpoint } from './api'

export const getServerSideProps = async () => {
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
							{icons.map((i: iconProps['icon']) => (
								<Icon icon={i} key={v4()} />
							))}
						</div>
					</div>
					<div className={style.columnCenter}>
						<h2 className={style.subheading}>Projects</h2>
						<ProjectGrid projects={projects} />
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Lander
