import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap/'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

export default function NavBar(props) {
    let history = useHistory()
    let user = useSelector(state => state.user) //bring user info
    let dispatch = useDispatch()

    const displayUsername = {display: user.authenticate ? 'block':'none',color:'white', paddingRight:10}
    
    function display(authenticate){
        return({
            display:authenticate ? 'block':'none'
        })
    }

    let logout = (e) => {
        dispatch({type:'LOGOUT'})
        history.push('/')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand href="/">JobSearch</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link" to='/'>Home</Link>
                    <Link style={display(user.authenticate)} className="nav-link" to='/candidates'>Candidates</Link>
                </Nav>
                <Form inline>
                    <h5 style={displayUsername}> Signed in as {user.email}</h5>
                    <Button variant="outline-info" style={{display: !user.authenticate ? 'block':'none'}}
                    onClick = {()=> history.push('/login')}
                    >Login</Button>
                    <Button variant="outline-info" style={{display: user.authenticate ? 'block':'none'}}
                    onClick = {()=> logout()}
                    >Logout</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            )
        }
        


