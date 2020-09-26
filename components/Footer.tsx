import style from '../styles/Footer.module.scss'

const Footer = () => {
	return (
		<div className={style.footer}>
			<p>
				Copyright ©{' '}
				<span className={style.gradient}>
					<a
						href="https://github.com/safinsingh/portfolio"
						rel="noreferrer"
						target="_blank"
					>
						Safin Singh
					</a>
				</span>{' '}
				2020 | Made with 💙 & Next.js
			</p>
		</div>
	)
}

export default Footer
