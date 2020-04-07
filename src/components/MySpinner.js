import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function MySpinner() {
    return (
        <Spinner style={{width:100, height:100, margin:'5rem'}} animation="border" variant="info" />
    )
}
