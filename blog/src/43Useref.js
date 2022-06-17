import './App.css';
import React,{useRef} from 'react';
function Data() {
    let inputRef=useRef(null)
    function handleInput()
    {
        console.warn("function call")
        // inputRef.current.value="1000"
        // inputRef.current.focus();
        inputRef.current.style.display="none"
    }
    return (
        <div className="App">
            <h1>useRef in React</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput} >Handle Input</button>
        </div>
    );
}

export default Data;