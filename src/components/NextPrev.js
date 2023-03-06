import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RMApi from './RMApi';

function NextPrev (props) {
    const [url, setUrl] = useState(props.url);
    const handleNextPage = async () => {
        let data = await fetch(url);
        let parsedData = await data.json();
        if(parsedData.info.next !== null){
            setUrl(parsedData.info.next);
        }
    }
    const handlePrevPage = async () => {
        let data = await fetch(url);
        let parsedData = await data.json();
        if(parsedData.info.prev !== null){
            setUrl(parsedData.info.prev);
        }
    }
	return (
        <div>
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
                <Button onClick={handlePrevPage}variant="outline-secondary">Prev</Button>
                <Button onClick={handleNextPage} variant="outline-secondary">Next</Button>
                <RMApi url={url}/>
                <Button onClick={handlePrevPage}variant="outline-secondary">Prev</Button>
                <Button onClick={handleNextPage} variant="outline-secondary">Next</Button>
		    </div>
        </div>
	)
}

export default NextPrev;