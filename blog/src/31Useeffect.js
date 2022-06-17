import './App.css';
import React,{useEffect,useState} from 'react'
function Ravii(props){
    useEffect(() => {
        alert("count. is"+props.count)
    },[props.count,props.data])
   return(
        <div className="App">
            <h1>Count Props : {props.count}</h1>
            <h1>Data Props : {props.data}</h1>
        </div>
    );
}

export default Ravii;