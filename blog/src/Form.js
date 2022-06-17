import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Pending from './Pending'
import Complete from './Complete'

export default function Form() {
    const [task, setTasks] = useState("");
    const [Items, setItems] = useState([]);

    const clearState = () => {
        setTasks("");
    };

    function saveTask() {
        console.log(task);
        clearState();

        setItems((olditems) => {
            return [...olditems, task]
        })

        let data = { task }
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json",

            },
            body: JSON.stringify(data)
        }).then((response) => {
            response.json().then((Complete) => {
                console.log(Complete);
            })
        })
        
    }


    return (
        <div>
            <div className="mb-2 container">
                <h1 className="display-5 mx-3">Tasks</h1>
                <textarea className="form-control" onChange={(e) => { setTasks(e.target.value) }} value={task} name='task' id="exampleFormControlTextarea1" rows="4"></textarea>
                <button type="button" onClick={saveTask} className="btn btn-outline-primary mt-2">Update</button>
            </div>


            {/* <div className="App"> */}
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            <Pending taskdata={task} items={Items} itemset={setItems}/>
                        </Col>

                        <Col xs lg="4">
                            <Complete />
                        </Col>
                    </Row>
                </Container>
            {/* </div> */}
        </div>
    )
}
