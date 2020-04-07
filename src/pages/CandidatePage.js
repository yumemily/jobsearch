import React from "react";
import CandidateForm from '../components/CandidateForm'
import {  Row, Col, Container } from "react-bootstrap";

export default function CandidatePage(props) {
  console.log({ props });

  return (
    <Container >
    <Row>
      <Col>
        <CandidateForm />
      </Col>
    </Row>
  </Container>
  );
}