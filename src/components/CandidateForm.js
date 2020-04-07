import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from 'react-router-dom'
import { InputGroup, Row, Col, Form, Button, Container } from "react-bootstrap";

export default function CandidateForm() {
  const [validated, setValidated] = useState(false);
  const [candidate, setCandidate] = useState({
    city: "",
    email: "",
    company: "",
    country: "",
    job_title: "",
    photo_url: "",
    last_name: "",
    first_name: ""
  });
  let history = useHistory();
  const {id} = useParams();

  const getCandidate = async () => {
    try {
      let url = `https://em-indeed-clone.herokuapp.com/candidates/${id}`
      let config = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, config)
      const data = await response.json();
      console.log('candid',data)
      setCandidate(data);
    } catch {
      console.log("Could not fetch candidate.");
    }
  };

  useEffect(() => {
    getCandidate();
  }, []);

  const updateCandidate = async () => {
    let url = `https://em-indeed-clone.herokuapp.com/candidates/${id}`
    const config = {
      method: "PUT",
      body: JSON.stringify(candidate),
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const response = await fetch(
        url,
        config
      );
    } catch (error) {
      console.log("Oops");
    }
    history.goBack();
  };

  const onSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      updateCandidate();
      e.preventDefault();
    }
    setValidated(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <img src={candidate.photo_url} alt={candidate.first_name} />
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={candidate.first_name}
                  onChange={e =>
                    setCandidate({ ...candidate, first_name: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={candidate.last_name}
                  onChange={e =>
                    setCandidate({ ...candidate, last_name: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a last name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    required
                    type="text"
                    value={candidate.email}
                    placeholder="john@email.com"
                    onChange={e =>
                      setCandidate({ ...candidate, email: e.target.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please choose a email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City"
                  value={candidate.city}
                  onChange={e =>
                    setCandidate({ ...candidate, city: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="U.S.A."
                  value={candidate.country}
                  onChange={e =>
                    setCandidate({ ...candidate, country: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a country.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom06">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={candidate.photo_url}
                  onChange={e =>
                    setCandidate({
                      ...candidate,
                      photo_url: e.target.value
                    })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a photo URL.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom07">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={candidate.company}
                  placeholder="CoderSchool"
                  onChange={e =>
                    setCandidate({ ...candidate, company: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom08">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Developer"
                  value={candidate.job_title}
                  onChange={e =>
                    setCandidate({ ...candidate, job_title: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid job title.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            {/* <Link to='/candidates'> */}
            <Button type="submit">Save</Button>
            {/* </Link> */}
            <Link to='/candidates'>Back to candidates</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}