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

export interface indexProps {
	projects: Array<card>
}

export interface cardProps {
	project: card
}
