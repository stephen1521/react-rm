import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function CardFront(props){
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={props.character.image} />
            <Card.Body>
                <Card.Title>{props.character.name}</Card.Title>
                <Card.Text>Gender: {props.character.gender}</Card.Text>
                <Card.Text>Species: {props.character.species}</Card.Text>
                <Card.Text>Status: {props.character.status}</Card.Text>
            </Card.Body>
        </Card>
    )
}

function CardBack(props){
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Body>
                <Card.Title>Extra Information:</Card.Title>
                <Card.Text>Origin: {props.character.origin.name}</Card.Text>
                <Card.Text>Location: {props.character.location.name}</Card.Text>
                <Card.Text>Number of episodes: {props.character.episode.length}</Card.Text>
            </Card.Body>
        </Card>
    )
}


function CardDisplay(props) {
    const { character } = props;
    const [flip, setFlip] = useState(false);
    const handleToggle = () =>{
        setFlip((current) => !current);
    };
    if(!flip){
        return (
            <div onClick={handleToggle}>
                <CardFront character={character}/>
            </div>
        )
    } else if (flip){
        return (
            <div onClick={handleToggle}>
                <CardBack character={character}/>
            </div>
        )
    }
}

export default CardDisplay;