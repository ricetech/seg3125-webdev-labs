import React from 'react';

import './_home.scss';
import { Col, Container, Row } from "react-bootstrap";

export const HomePage = () => {
    return (
        <Container className='mt-4 container__md container__fill'>
            <Row>
              <Col>
                <h1>SEG 3125 Static Coursework - Eric Chen</h1>
                <p>Please use the navbar to browse this website.</p>
              </Col>
            </Row>
        </Container>
    );
}
