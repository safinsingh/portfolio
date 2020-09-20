import { v4 } from 'uuid'

import { card, graphqlErrMsg, projectGridProps } from '../lib'
import style from '../styles/ProjectGrid.module.scss'
import Card from './Card'

export default function ProjectGrid(props: projectGridProps) {
	const { projects } = props
	return (
		<div className={style.projectGrid}>
			{projects.length !== 0 ? (
				projects.map((p: card) => <Card project={p} key={v4()} />)
			) : (
				<p>{graphqlErrMsg}</p>
			)}
		</div>
	)
}
