import React, { useState, useEffect, Fragment } from "react";
import { Table } from 'react-bootstrap'
function Users() {
    const [user, setUser] = useState([
        { name: "ram", age: "23", address: "Pune" },
        { name: "raju", age: "25", address: "Satara" },
        { name: "shyam", age: "22", address: "solapur" },
        { name: "rocky", age: "23", address: "Pimpari" },
        { name: "jony", age: "24", address: "nanded" },
    ])
return (
    <Fragment>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item,index)=>
                    <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                </tr>)
                    }
            </tbody>
        </Table>
    </Fragment>
)
}

export default Users;