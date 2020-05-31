import React from 'react';
import FadeIn from 'react-fade-in';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

export function FadeInSpinner(props) {
    const {confirmationNumber} = props;

    return (
        <FadeIn>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Spinner animation="border" />
                        <p>Confirmations: {confirmationNumber}</p>
                    </Col>
                </Row>
            </Container>
        </FadeIn>
    )
}