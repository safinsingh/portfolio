import style from '../styles/Footer.module.scss'

const Footer = () => {
	return (
		<div className={style.footer}>
			<p>
				Copyright ©{' '}
				<span className="gradient">
					<a
						href="https://github.com/safinsingh/portfolio"
						target="_blank"
						rel="noreferrer"
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
