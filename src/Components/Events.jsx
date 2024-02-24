import React, { useState, useEffect } from "react";
import eventData from "../data/events.json";
import Event from "./Event";
import { Alert, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { BiInfoCircle } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
function Events() {
  const [events, setEvents] = useState(eventData);
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowWelcomeMessage(true);
  //     setTimeout(() => {
  //       setShowWelcomeMessage(false);
  //     }, 3000);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

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
    // <>
    //   {showAlert && <Alert variant="success">You have booked an event</Alert>}
    //   {showWelcomeMessage && <Alert variant="info">Welcome to our event platform!</Alert>}
    //   <Row className="g-4">
    //     {events.map((event, index) => (
    //       <Col key={`${index}-${event.like}`}>
    //         <Event
    //           name={event.name}
    //           img={event.img}
    //           price={event.price}
    //           nbTickets={event.nbTickets}
    //           nbParticipants={event.nbParticipants}
    //           like={event.like}
    //           onBuy={() => buy(index)}
    //           isSoldOut={event.nbTickets === 0}
    //           toggleLike={() => toggleLike(index)}
    //         />
    //       </Col>
    //     ))}
    //   </Row>
    // </>
    <>
      <div className="container ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Event Name</th>

              <th> Actions </th>
            </tr>
          </thead>
          {eventData.map((Element, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{Element.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        setShowWelcomeMessage(true);
                      }}
                    >
                      <Link to={`/events/${Element.name}`}>
                        <BiInfoCircle /> More Details
                      </Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
      <Outlet />
    </>
  );
}

export default Events;
