import { Fragment, useEffect, useState } from "react"
import {Table} from 'react-bootstrap'
import { traverseTwoPhase } from "react-dom/cjs/react-dom-test-utils.development"

export default function Users() {
    const [User, setUser]=useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            // console.warn("data",data)
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data)
            })
        })
    },[])

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                    {
                        User.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                        </tr>)
                    }
                </thead>
            </Table>
        </Fragment>
       
    )
}
