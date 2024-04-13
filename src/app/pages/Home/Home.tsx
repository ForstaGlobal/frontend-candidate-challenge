import React from 'react'
 import { Container } from "react-bootstrap"
import Todo from '../../features/Todo/Todo'

export default function HomePage() {
    return (
        <div>
            <Container>                
                <Todo />
            </Container>
        </div>
    )
}
