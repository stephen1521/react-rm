import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NextPrev from './components/NextPrev';

function App() {
	const [url] = useState('https://rickandmortyapi.com/api/character');
	return (
		<div>
			<Header />
			<NextPrev url={url}/>
		</div>
	)
}

export default App;
