import logo from './logo.svg'
import './App.css';
import { useState } from 'react';

function XYZ(){
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState("false");
    const [interest,setIntrest]=useState("");
    function getFormData(e)
    {
        console.warn(name,tnc,interest)
        e.preventDefault()
    }
    return(
        <div className="App">
            <h1>Handle From in React</h1>
            <from onSubmit={getFormData}>
            <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><<br /><br />
            <select onChange={(e)=>setIntrest(e.target.value)}>
                <option>Select Option</option>
                <option>Yes</option>
                <option>NO</option>
            </select><br /><br />
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Condition</span>
            <br /><br />
            <button type="submit">Submit</button>
            </from>
        </div>
    );
}

export default XYZ;