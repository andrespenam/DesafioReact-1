import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const element7 = <FontAwesomeIcon icon={faPizzaSlice} />;

function CardPizza({ title, ingredientes, image, price, onAdd }) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='display-6 fw bold mb-3 text-start'>{title}</Card.Title>
        <Card.Text className='lead fs-6 text-center'>
          {element7} {Array.isArray(ingredientes) ? ingredientes.join(', ') : ingredientes}
        </Card.Text>
      </Card.Body>
      <ListGroup className="text-center display-5 fw bold mb-3">
        <p>Precio: ${price.toLocaleString()}</p>
      </ListGroup>
      <Card.Body className='d-flex justify-content-around'>
        <Button variant="light">Ver más..</Button>
        <Button variant="dark" onClick={onAdd}>Agregar</Button> 
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
