import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';

function RMApi (props) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch(props.url)
		  .then(res => res.json())
		  	.then(
				(result) => {
			  		setIsLoaded(true);
			  		setItems(result);
				},
				(error) => {
			  		setIsLoaded(true);
			  		setError(error);
				}
		  	)	
	}, [])
	  	if (error) {
			return <div>Error: {error.message}</div>;
	  	} else if (!isLoaded) {
			return <div>Loading...</div>;
	  	} else {
			const cards = items.results.map((character, index) => {
			return (
				<Card key={index} character={character}/>
			)
			})
			return <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 me-5 ms-5 mt-5'>{cards}</div>
	  	}
}

function App() {
	return (
		<div>
			<Header />
			<RMApi url='https://rickandmortyapi.com/api/character'/>
		</div>
	)
}

export default App;
