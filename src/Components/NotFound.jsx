import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NotFoundImage from "../../public/images/404 Error-amico.png";
function NotFound() {
  return (
    <>
      {" "}
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center">
              <img
                src={NotFoundImage}
                alt="404 Not Found"
                className="img-fluid w-75"
              />
              <h1 className="mt-4">Page non trouvée</h1>
              <p className="text-muted">
                Désolé, la page que vous recherchez n'existe pas.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NotFound;
