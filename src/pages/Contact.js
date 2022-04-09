import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>
      <hr />
      <Container>
        <Row>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-danger">Contact Title One</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">More Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-danger">Contact Title two</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">More Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-danger">Contact Title Three</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">More Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-danger">Contact Title Four</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">More Details</Button>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
