export interface Card {
	node: {
		url: string
		name: string
		primaryLanguage: {
			name: string
		}
		description: string
	}
}

export interface IconProps {
	icon: 'github' | 'email' | 'dev' | 'linkedin'
}

export const icons: Array<IconProps['icon']> = ['github', 'linkedin', 'dev', 'email']

export interface IndexProps {
	projects: Card[]
}

export interface cardProps {
	project: Card
}

export interface projectGridProps {
	projects: Card[]
}