import React from 'react'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Home from './modules/Home'

const App = () => {
	return (
		<div theme={theme}>
			<GlobalStyle />
			<Home />
		</div>
	)
}

export default App