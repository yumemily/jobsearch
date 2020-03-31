import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap/'

export default function NavBar(props) {
    function display(auth){
        return({
            display:auth ? 'block':'none'
        })
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand href="/">JobSearch</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link" to='/'>Home</Link>
                    <Link style={display(props.auth)}className="nav-link" to='/candidates'>Candidates</Link>
                    {/* <Link className="nav-link" to='/candidates'>Add Candidate</Link> */}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    <Button variant="outline-info" style={{display: !props.auth ? 'block':'none'}}
                    onClick = {()=> props.setAuth(true)}
                    >Login</Button>
                    <Button variant="outline-info" style={{display: props.auth ? 'block':'none'}}
                    onClick = {()=> props.setAuth(false)}
                    >Logout</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            )
        }
        

