import React from 'react';
import NavBar from "./NavBar";
import Main from './Main'
import '../style/App.css'

function App () {
	return (
		<div className="app-container">
			<NavBar />
			<Main /> 
		</div>
	)
}

export default App;