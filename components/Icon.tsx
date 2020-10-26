import { iconProps } from '../lib'
import style from '../styles/Icon.module.scss'

const Icon = (props: iconProps) => {
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
					<img
						src="/email.svg"
						className={style.social}
						alt="My email address"
					/>
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
					<img
						src="/devto.svg"
						className={style.social}
						alt="My dev.to profile"
					/>
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
					<img
						src="/linkedin.svg"
						className={style.social}
						alt="My LinkedIn profile"
					/>
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
					<img
						src="/github.svg"
						className={style.social}
						alt="My GitHub profile"
					/>
				</a>
			)
		default:
			return <p>Oops! Couldn&apos;t find icon: {icon}</p>
	}
}

export default Icon
