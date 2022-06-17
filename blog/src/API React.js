import React, {useEffect, useState } from "react";
import {Table} from 'react-bootstrap'

import './App.css';

function App() {
  const [post, setPost] = useState([])
  console.log(post)
  const data = {
    "asAcademicYearId": "8",
    "asSchoolId": "120",
    "asStandardId": "1063",
    "asDivisionId": "1257"
  };

  useEffect(() => {
    fetch('http://schoolapp.aaditechnology.com/MobileService.svc/School/GetHolidayList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(data),
    })
  
.then(response =>
        response.json())
      .then((data) => {
        setPost(data)
      
      }
      )
      .catch((error) => {
        console.error('Error:', error)
      });
  }, [])
  return (
    <div>
      <h1>User listing is here</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> EndDate</th>
            <th> Name</th>
            <th>Standards</th>
            <th>StartDate</th>
            <th>ToatalDays</th>
          </tr>
        </thead>
        <tbody>
          { 
            (post.length===0)?
            null:
              post.GetHolidayListResult.map((item, i) =>
                <tr key={i}>
                <td>{item.EndDate}</td>
                <td>{item.Name}</td>
                <td>{item.Standards}</td>
                <td>{item.StartDate}</td>
                <td>{item.ToatalDays}</td>
              </tr>              
              )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App;