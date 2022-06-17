import './App.css';
import React,{UseState} from 'react';
function As() {
    let [val,setVal]=useState("")
    let [item,setItem]=useState("")

    return (
        <div className="App">
            <h1>Controlled Componant</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
            <h3>Value{val}</h3>
        </div>
    );
}

export default As;