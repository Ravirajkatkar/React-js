import React from 'react'
import Card from 'react-bootstrap/Card'
//import Complete from './Complete';

export default function Pending(props) {

    const deletetodo = (i) => {
        alert(i)
        let newlist = props.items;
        newlist.splice(i, 1)
        props.itemset([...newlist]);   
    }
    return (
        <div>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Pending Task</Card.Header>
                <Card.Body>
                    <ol className="list-group list-group-flush list-group-numbered">
                        {/* <li className="list-group-item">{props.taskdata}<span className="badge bg-danger rounded-circle">X</span></li> */}
                        {
                            props.items.map((itemsval, i) => {
                                return <li className="list-group-item" value={i}>{itemsval}
                                    <span className="badge bg-success rounded-circle mx-2" onClick={deletetodo} >✔</span>
                                    <span className="badge bg-danger rounded-circle" onClick={deletetodo}>✘</span>
                                </li>


                            })
                        }
                    </ol>
                </Card.Body>
            </Card>
        </div>
    )
}