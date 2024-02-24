import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import eventData from "../data/events.json";
import { Alert, Row, Col, Button } from "react-bootstrap";
function Event() {
  // const [events, setEvents] = useState(eventData);
  // const [showAlert, setShowAlert] = useState(false);
  // const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const { name } = useParams();
  const event = eventData.find((event) => event.name === name);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowWelcomeMessage(true);
  //     setTimeout(() => {
  //       setShowWelcomeMessage(false);
  //     }, 3000);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // const like = event.like;
  // const buy = (index) => {
  //   const newEvents = [...events];
  //   if (newEvents[index].nbTickets > 0) {
  //     newEvents[index].nbParticipants += 1;
  //     newEvents[index].nbTickets -= 1;
  //     setEvents(newEvents);
  //     setShowAlert(true);
  //     setTimeout(() => setShowAlert(false), 2000);
  //   }
  // };

  // const toggleLike = (index) => {
  //   const newEvents = [...events];
  //   newEvents[index].like = !newEvents[index].like;
  //   setEvents(newEvents);
  // };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {event.nbTickets === 0 ? (
          <Card.Img variant="top" src={`/public/images/sold_out.png`} />
        ) : (
          <Card.Img variant="top" src={`/public/images/${event.img}`} />
        )}
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>
            Price: {event.price}
            <br />
            Number of tickets: {event.nbTickets}
            <br />
            Number of participants: {event.nbParticipants}
          </Card.Text>
        </Card.Body>
      </Card>
    </>

    // <>
    //   <div className="card">
    //     <div className="row">
    //       <div className="col-12 col-md-6">
    //         <h1>{event.name}</h1>
    //         <img src="" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default Event;
