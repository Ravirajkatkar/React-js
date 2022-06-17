import'./App.css';
import React,{useEffect,useState} from 'react';
import Ravii from './Useeffect31'
function Are() {
    const[data,setData]=useState(10);
    const[count,setCount]=useState(100);
return(
    <div className="App">
        <Ravii count={count} data={data} />
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setData(count+1)}>Update Data</button>
    
            </div>
);
}

export default Are;