import { IconProps } from '../lib/types'
import style from '../styles/Icon.module.scss'

const Icon = (props: IconProps) => {
	const { icon } = props
	switch (icon) {
		case 'email':
			return (
				<a
					target="_blank"
					rel="noreferrer"
					href="mailto:safin.singh@gmail.com"
					className={style.socialA}
					aria-label="My email address"
				>
					<svg className={style.social} aria-label="My email address">
						<use xlinkHref="icons.svg#email" />
					</svg>
				</a>
			)
		case 'dev':
			return (
				<a
					target="_blank"
					rel="noreferrer"
					href="https://dev.to/safinsingh"
					className={style.socialA}
					aria-label="My dev.to profile"
				>
					<svg className={style.social} aria-label="My dev.to profile">
						<use xlinkHref="icons.svg#devto" />
					</svg>
				</a>
			)
		case 'linkedin':
			return (
				<a
					href="https://www.linkedin.com/in/safinsingh"
					className={style.socialA}
					target="_blank"
					rel="noreferrer"
					aria-label="My LinkedIn profile"
				>
					<svg className={style.social} aria-label="My email address">
						<use xlinkHref="icons.svg#linkedin" />
					</svg>
				</a>
			)
		case 'github':
			return (
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/safinsingh"
					className={style.socialA}
					aria-label="My GitHub profile"
				>
					<svg className={style.social} aria-label="My GitHub profile">
						<use xlinkHref="icons.svg#github" />
					</svg>
				</a>
			)
		default:
			return <p>Oops! Couldn&apos;t find icon: {icon}</p>
	}
}

export default Icon
