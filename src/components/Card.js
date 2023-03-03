import React, { useState, useEffect } from 'react';
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

}

function CardDisplay(props) {
    const { character } = props;
    return (
       <CardFront character={character}/>
    )
}

export default CardDisplay;