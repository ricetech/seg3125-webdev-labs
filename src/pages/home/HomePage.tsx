import React from 'react';

import { Col, Container, Figure, Row } from 'react-bootstrap';

import './_home.scss';

export const HomePage = () => {
  return (
    <Container className='mt-4 container__md container__fill'>
      <Row>
        <Col>
          <h1>SEG 3125 Static Coursework - Eric Chen</h1>
          <p>
            Welcome to the website where I publish the work that I've completed in the labs of the course
            SEG 3125.
          </p>
          <p>Please use the navbar at the top of the page to browse the website.</p>
          <p>
            No content on this website or in its source code may be copied or otherwise stored without
            my express permission.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <Figure>
            <Figure.Image
              className='app-logo'
              alt='RiceTech Logo'
              src='img/the_ricetech-23.svg'
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};
