import '../styles/Globals.scss'

import { CSSReset, theme as defaultTheme, ThemeProvider } from '@chakra-ui/core'
import { AppProps } from 'next/app'
import React from 'react'

const theme = {
	...defaultTheme,
	colors: {
		...defaultTheme.colors,
		white: '#f0f0f0',
		black: '#0f0f0f',
	},
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<ThemeProvider theme={theme}>
		<CSSReset />
		<Component {...pageProps} />
	</ThemeProvider>
)

export default App
