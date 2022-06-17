import './App.css'
import React from 'react'
function Pqr() {
    // const students = ['Ram','Shyam','Sam','Jon'];
    const students=[
        {name:"Ram",email:'ram@gmail.com',contact:100},
        {name:"Shyam",email:'shyam@gmail.com',contact:200},
        {name:"Sam",email:'sam@gmail.com',contact:300},
        {name:"Jon",email:'jon@gmail.com',contact:400},

    ]
    return(
        <div className="App">
            <h1>Handdle Array with List</h1>
            <table Border="1">
            <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                {
                    students.map((data) =>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                    </tr>)
                }
            </table>
        </div>
    );
}

export default Pqr;