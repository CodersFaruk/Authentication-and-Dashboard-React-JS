import React from 'react'
import {Card,Form,Button} from 'react-bootstrap'

const Login = () => {
  return (
    <>
    <Card>
  <Card.Body>
    <Card.Title className='font-weight-bold text-danger'>Login Your Information</Card.Title>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group >
  <Button variant="info"  type="submit">
    LogIn
  </Button>
</Form>
    
  </Card.Body>
</Card>
    </>
  )
}

export default Login