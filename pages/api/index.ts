import type { NextApiRequest, NextApiResponse } from 'next'

import { dummyProject } from '../../lib/constants'

const gqlQuery = (username: string) => {
	return `query {
	repositoryOwner(login: "${username}") {
	  ... on ProfileOwner {
		 pinnedItemsRemaining
		 itemShowcase {
			items(first: 6) {
			  edges {
				 node {
					... on Repository {
					  name
					  description
					  url
					  primaryLanguage {
						 name
					  }
					}
				 }
			  }
			}
		 }
	  }
	}
 }`
}

export const endpoint = async () => {
	const projects: any = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
		body: JSON.stringify({
			query: gqlQuery('safinsingh'),
		}),
	})

	const ret = await projects.json()

	return {
		props: {
			projects:
				ret.data === undefined
					? process.env.NODE_ENV === 'production'
						? []
						: Array.from({ length: 6 }).map(() => dummyProject)
					: ret.data.repositoryOwner.itemShowcase.items.edges,
		},
	}
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json((await endpoint()).props.projects)
}
