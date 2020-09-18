import '../styles/globals.scss'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<ThemeProvider>
		<CSSReset />
		<Component {...pageProps} />
	</ThemeProvider>
)

export default App
