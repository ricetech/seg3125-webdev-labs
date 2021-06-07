import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import './_http-404.scss';

export const HTTP404Page = () => {
  return (
    <Container className='mt-4 container__md container__fill'>
      <Row>
        <Col>
          <h1>Page Not Found</h1>
          <p>Please go back and try again.</p>
        </Col>
      </Row>
    </Container>
  );
};
