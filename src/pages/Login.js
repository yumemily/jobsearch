import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Login() {
    let dispatch = useDispatch()
    let history = useHistory()

    let user = useSelector(state => state.user) //bring user info

    let email = ''
    let password = ''

    let login = (e) => {
        e.preventDefault()
        let user = { email: email, password: password }
        dispatch({ type: 'LOGIN', payload: user })
        history.push('/')
    }
    return (
        <div className='container mt-5 d-flex justify-content-center'>
            <Card style={{ maxWidth: 500, padding: '2rem' }}>
                <h2 className='text-center pb-2'>Login</h2>
                <Form onSubmit={(e) => login(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => email = e.target.value} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => password = e.target.value} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Card>
        </div>
    )
}
