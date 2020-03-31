import React, { useState, useEffect } from "react";
import CandidateForm from '../components/CandidateForm'
import {  Row, Col, Container } from "react-bootstrap";
import { useParams } from 'react-router-dom'

export default function CandidatePage(props) {
  console.log({ props });
  const { id } = useParams();
  const [candidate, setCandidate] = useState({});

  const getCandidate = async () => {
    try {
      const response = await fetch(`http://localhost:3001/candidates/${id}`);
      const data = await response.json();
      setCandidate(data);
    } catch {}
  };

  useEffect(() => {
    getCandidate();
  }, []);


  return (
    <Container >
    <Row>
      <Col>
        <CandidateForm candidate={candidate} />
      </Col>
    </Row>
  </Container>
  );
}