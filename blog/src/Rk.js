import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react'
function Rk() {
    const [data,setData]=useState(null)
        function getdata(val)
        {
            console.warn(val.target.value)
            setData(val.target.value)
        }
           return (
        <div className="Rk">
            <h1>{data}</h1>
            <input type="text" onChange={getdata} />
        </div>
    );
}

export default Rk;