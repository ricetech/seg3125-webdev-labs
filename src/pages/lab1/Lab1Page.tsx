import React from 'react';

import './_lab1.scss';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export const Lab1Page = () => {
  return (
    <>
      <Container className='mt-4 container__md'>
        <Row>
          <Col>
            <h1 className='mb-3'>SEG 3125 UI Evaluation</h1>
            <Card style={{ width: '18rem' }}>
              <a href='https://www.newegg.ca/' target='_blank"'>
                <Card.Img variant='top' src='./img/lab1/newegg.png' />
              </a>
              <Card.Body>
                <Card.Title>Website to Evaluate</Card.Title>
                <Card.Text>
                  This evaluation form is to evaluate the website linked below. Please have the website
                  open as you fill out this survey.
                </Card.Text>
                <Button variant='primary'>Visit website</Button>
              </Card.Body>
            </Card>
            <Form className='mt-3'>
              <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter name' />
              </Form.Group>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
                <Form.Text className='text-muted'>
                  If you wish to be contacted about your response.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='formSelectUsability'>
                <Form.Label>On a scale of 1-5, how would you rate the <b>usability</b> of the website?</Form.Label>
                <Form.Control as='select'>
                  <option selected>Select one...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='formSelectConsistency'>
                <Form.Label>On a scale of 1-5, how would you rate the <b>consistency</b> of the website?</Form.Label>
                <Form.Control as='select'>
                  <option selected>Select one...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='formMajorUiElements'>
                <Form.Label>Select the major UI elements that the website implements.</Form.Label>
                <Form.Check label='Top Navbar' />
                <Form.Check label='Side navbar' />
                <Form.Check label='Footer' />
                <Form.Check label='Column-based layouts' />
                <Form.Check label='Mobile compatibility' />
              </Form.Group>
              <Form.Group controlId='formOverallSatisfaction'>
                <Form.Label>Overall, would you say that the website has a good UI?</Form.Label>
                <Form.Check label='Yes' type='radio' name='formOverallSatisfaction' />
                <Form.Check label='No' type='radio' name='formOverallSatisfaction' />
              </Form.Group>
              <Form.Group controlId='formComments'>
                <Form.Label>Overall Comments</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
