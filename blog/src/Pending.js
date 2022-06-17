import React from 'react'
import Card from 'react-bootstrap/Card'
//import Complete from './Complete';

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export default function Pending(props) {

    const cleartodo = (i) => {
        alert("Are You Sure......!")
        let newlist = props.items;
        newlist.splice(i, 1)
        props.itemset([]);
    }
    const deletetodo = (i) => {
        alert("Confirm to Delete this Task......!")
        let newlist = props.items;
        newlist.splice(i, 1)
        props.itemset([...newlist]);
    }

    const updatetodo = (i) => {
        alert("Successfully......!")
        // let newlist = props.items;
        // newlist.splice(i, 1)
        // props.itemset([...newlist]);
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Pending Task       <span className="badge bg-dark rounded-pills mx-2 " onClick={cleartodo} >⇒ Clear All</span></Card.Header>
                        <Card.Body>
                            <ol className="list-group list-group-flush list-group-numbered">
                                {/* <li className="list-group-item">{props.taskdata}<span className="badge bg-danger rounded-circle">X</span></li> */}
                                {
                                    props.items.map((itemsval, i) => {
                                        return <li className="list-group-item" value={i}>{itemsval}
                                            <span className="badge bg-success rounded-circle mx-2" onClick={updatetodo} >✔</span>
                                            <span className="badge bg-danger rounded-circle" onClick={deletetodo}>✘</span>
                                        </li>


                                    })
                                }
                            </ol>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs lg="4">

                </Col>
            </Row>
        </Container>
    )
}