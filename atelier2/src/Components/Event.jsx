import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Event({ name, img, price, nbTickets, nbParticipants, like, onBuy, isSoldOut, toggleLike }) {
  return (
    <Card style={{ width: '18rem' }}>
      {isSoldOut ? (
        <Card.Img variant="top" src={`/public/images/sold_out.png`} />
      ) : (
        <Card.Img variant="top" src={`/public/images/${img}`} />
      )}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Price: {price}<br />
          Number of tickets: {nbTickets}<br />
          Number of participants: {nbParticipants}
        </Card.Text>
        <Button variant={like ? "danger" : "outline-success"} onClick={toggleLike} className="me-2">
          {like ? 'Dislike' : 'Like'}
        </Button>
        {isSoldOut ? (
          <Button variant="secondary" disabled>Book an event</Button>
        ) : (
          <Button variant="primary" onClick={onBuy}>Book an event</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Event;
