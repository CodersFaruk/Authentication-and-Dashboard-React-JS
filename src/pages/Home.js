import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <hr />
      <Container>
        <Row>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-info">Home Page Section One</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">More Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-info">Home Page Section Two</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">More Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-info">Home Page Section Three</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">More Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title className="text-info">Home Page Section Four</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">More Details</Button>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
