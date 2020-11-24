export interface card {
	node: {
		url: string
		name: string
		primaryLanguage: {
			name: string
		}
		description: string
	}
}

export interface iconProps {
	icon: 'github' | 'email' | 'dev' | 'linkedin'
}

export const icons: iconProps['icon'][] = ['github', 'linkedin', 'dev', 'email']

export interface indexProps {
	projects: card[]
}

export interface cardProps {
	project: card
}

export interface projectGridProps {
	projects: card[]
}
