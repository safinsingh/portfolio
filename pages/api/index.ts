export default async (req, res) => {
	const projects: any = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
		body: JSON.stringify({
			query: `query {
          repositoryOwner(login: "safinsingh") {
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
        }`,
		}),
	})

	const ret = await projects.json()
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')

	res.end(
		JSON.stringify(
			{
				props: {
					projects: ret.data.repositoryOwner.itemShowcase.items.edges,
				},
			},
			null,
			2
		)
	)
}
