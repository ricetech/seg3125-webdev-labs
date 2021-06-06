import React from 'react';

import './_http-404.scss';
import { Col, Container, Row } from "react-bootstrap";

export const HTTP404Page = () => {
    return (
        <Container className='mt-4'>
            <Row>
              <Col>
                <h1>Page Not Found</h1>
                <p>Please go back and try again.</p>
              </Col>
            </Row>
        </Container>
    );
}