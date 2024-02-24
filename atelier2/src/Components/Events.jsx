import React, { useState, useEffect } from 'react';
import eventData from '../data/events.json';
import Event from './Event';
import { Alert, Row, Col } from 'react-bootstrap';

function Events() {
  const [events, setEvents] = useState(eventData);
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(true);
      setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 3000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const buy = (index) => {
    const newEvents = [...events];
    if (newEvents[index].nbTickets > 0) {
      newEvents[index].nbParticipants += 1;
      newEvents[index].nbTickets -= 1;
      setEvents(newEvents);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    }
  };

  const toggleLike = (index) => {
    const newEvents = [...events];
    newEvents[index].like = !newEvents[index].like;
    setEvents(newEvents);
  };

  return (
    <>
      {showAlert && <Alert variant="success">You have booked an event</Alert>}
      {showWelcomeMessage && <Alert variant="info">Welcome to our event platform!</Alert>}
      <Row className="g-4">
        {events.map((event, index) => (
          <Col key={`${index}-${event.like}`}>
            <Event
              name={event.name}
              img={event.img}
              price={event.price}
              nbTickets={event.nbTickets}
              nbParticipants={event.nbParticipants}
              like={event.like}
              onBuy={() => buy(index)}
              isSoldOut={event.nbTickets === 0}
              toggleLike={() => toggleLike(index)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Events;
