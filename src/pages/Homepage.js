import React from 'react'
import { Jumbotron, Container, Card, CardDeck, Row, Col } from 'react-bootstrap/'
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Homepage() {

    return (
        <div>
            <Jumbotron style={{ backgroundColor: '#F7F7F7' }} fluid>
                <Container >
                    <Row style={{ backgroundColor: '#F7F7F7' }}>
                        <Col><h1 style={{ fontWeight: 'bolder' }}><FontAwesomeIcon icon={faSearch} /> Job Candidates</h1>
                            <p>
                                Login with bitna@coderschool.vn to access administrative control!
                                Or log in with an existing email to edit that specific user's info!
                    </p>
                        </Col>
                        <Col>
                            <img src='https://image.freepik.com/free-vector/urban-background-with-business-people-books_1262-18983.jpg' />
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
            <Container className='mb-5'>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    )
}
