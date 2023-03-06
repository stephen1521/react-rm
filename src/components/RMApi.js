import React, { useState, useEffect } from 'react';
import Card from './Card';

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
	}, [props.url])
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
		return (
            <div>
                <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 me-5 ms-5 mt-3 mb-4'>
                        {cards}</div>
            </div>
        )
	}
}

export default RMApi;