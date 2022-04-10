import React from "react";
import { Tabs, Tab, Container, Row } from "react-bootstrap";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginRegister = () => {
  return (
    <Container>
      <Row>
        <div className="col-md-6">
          <div className="bg-img d-none d-md-block">
           
          </div>
        </div>
        <div className="col-md-6">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
              <Login />
            </Tab>
            <Tab eventKey="register" title="register">
              <Register />
            </Tab>
          </Tabs>
        </div>
      </Row>
    </Container>
  );
};

export default LoginRegister;
