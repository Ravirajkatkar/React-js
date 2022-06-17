import './App.css'
import React from 'react'
import { Table } from 'react-bootstrap'
function Mad() {
    const users = [
        { 
         name: "Ram", email:'ram@gmail.com',address:[
            { Hn:"10",city:"Pune",country:'India'},
            { Hn:"20",city:"Mumbai",country:'India'},
            { Hn:"30",city:"Delhi",country:'India'},
            { Hn:"40",city:"Kolkatta",country:'India'}
        ]},
        { name: "Jon", email:'Jon@gmail.com',address:[
            { Hn:"10",city:"Pune",country:'India'},
            { Hn:"20",city:"Mumbai",country:'India'},
            { Hn:"30",city:"Delhi",country:'India'},
            { Hn:"40",city:"Kolkatta",country:'India'}
        ]},
        { name: "Shyam", email:'shyam@gmail.com',address:[
             {Hn:"10",city:"Pune",country:'India'},
            { Hn:"20",city:"Mumbai",country:'India'},
            { Hn:"30",city:"Delhi",country:'India'},
            { Hn:"40",city:"Kolkatta",country:'India'}
        ]},
        { name: "Sam", email:'sam@gmail.com',address:[
            { Hn:"10",city:"Pune",country:'India'},
            { Hn:"20",city:"Mumbai",country:'India'},
            { Hn:"30",city:"Delhi",country:'India'},
            { Hn:"40",city:"Kolkatta",country:'India'}
        ]
      },
    ]
    return(
        <div className="App">
            <h1>List With Nested Array</h1>
            <Table varient="dark" striped>
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    </tr>
                </tbody>
                {
                    users.map(item) =>
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <Table variant="dark" striped>
                        <tbody>{
                        item.address.map((data) =>
                        <tr>
                            <td>{data.Hn}</td>
                            <td>{data.city}</td>
                            <td>{data.country}</td>
                        </tr>
                        )}
                        </tbody>
                    </Table>
                    </td>
                    </tr>
                    )   
                 }
            </Table>
        </div>
    );
}
export default Mad;