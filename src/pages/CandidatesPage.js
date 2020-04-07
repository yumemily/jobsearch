import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
    Row,
    Col,
    Card,
    ListGroup,
    Container,
    ListGroupItem
  } from "react-bootstrap";
  
  import {
    faMap,
    faEdit,
    faTrash,
    faUserMd,
    faMapPin,
    faEnvelope,
    faVenusMars,
    faBriefcase
  } from "@fortawesome/free-solid-svg-icons";
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function CandidatesPage() {
    const [candidates, setCandidates] = useState([]);
    
    let user = useSelector(state => state.user) //bring user info

    useEffect(() => {
        const getCandidates = async () => {
          const url = 'https://em-indeed-clone.herokuapp.com/candidates'
          const response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          console.log({ data });
          setCandidates(data);
        };
        getCandidates();
      }, []);

      const onDeleteCandidate = async(id) => {
        try {
          const url = `https://em-indeed-clone.herokuapp.com/candidates/${id}`
          const response = await fetch(url,{
            method: 'DELETE',
          });
          const newCandidates = candidates.filter(candidate => candidate.id !== id);
          setCandidates(newCandidates);
        } catch (error) {
          console.log("Error: ", error);
        }
      };
      console.log(candidates)
    return (
        <Container className='fluid, my-3'>
        <Row >
          {candidates.map(candidate => {
            return (
                <Col lg="3" key={candidate.id}>
                <Card className='my-3'>
                  <Card.Img variant="top" src={candidate.photo_url} />
                  <Card.Body>
                    <Card.Title>
                      {candidate.first_name + " " + candidate.last_name}
                    </Card.Title>
                    <Card.Text>{candidate.id}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faBriefcase} /> {candidate.company}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faUserMd} /> {candidate.job_title}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faVenusMars} /> {candidate.gender}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faMapPin} /> {candidate.city}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faMap} /> {candidate.country}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faEnvelope} /> {candidate.email}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <div style={{display: user.email === 'bitna@coderschool.vn' || user.email === candidate.email ? 'block':'none'}}>
                    <Link to={`/candidates/${candidate.id}`}>
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Link>
                    <Card.Link onClick={() => onDeleteCandidate(candidate.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Remove
                    </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
}
