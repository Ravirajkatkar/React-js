//import { useMemo } from 'react';
//import { useState } from 'react/cjs/react.development';
import './App.css';
import React, { useState, useMemo }from 'react';
function Sd() {
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(10);
    
    const multiCountMemo = useMemo(function multiCount() {
        console.warn("multiCount")
        return count * 5
    },[count])
    return(
        <div className="App">
            <h1>useMemo Hook in React</h1>
            <h2>Count :</h2>
            <h2>Item :</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={() => setCount(count * 1)}>Update Count</button>

            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </div>
    );
}

export default Sd;