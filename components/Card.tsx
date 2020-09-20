import { cardProps } from '../lib'
import style from '../styles/Card.module.scss'

const Card = (props: cardProps) => {
	const { project } = props
	return (
		<div>
			<a target="_blank" rel="noreferrer" href={project.node.url}>
				<div className={style.project}>
					<h3 className={style.projectTitle}>{project.node.name}</h3>
					<p className={style.projectLang}>
						{project.node.primaryLanguage.name}
					</p>
					<p className={style.porjectDesc}>{project.node.description}</p>
				</div>
			</a>
		</div>
	)
}

export default Card
