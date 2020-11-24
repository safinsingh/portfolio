import { v4 } from 'uuid'

import { graphqlErrMsg } from '../lib/constants'
import { projectGridProps } from '../lib/types'
import style from '../styles/ProjectGrid.module.scss'
import Card from './Card'

const ProjectGrid = (props: projectGridProps) => {
	const { projects } = props
	return (
		<div className={style.projectGrid}>
			{projects.length !== 0 ? (
				projects.map((p) => <Card project={p} key={v4()} />)
			) : (
				<p>{graphqlErrMsg}</p>
			)}
		</div>
	)
}

export default ProjectGrid
