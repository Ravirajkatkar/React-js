import logo from './logo.svg';
import './App.css';
import react from 'react';

import User from './Render'
const [name setName]=React.useState ("Anil")
function App(){
    return(
        <div className="App">
            <h1>Render Method in react</h1>
            <User name={name}/>
                  <button onClick={()=>setName("sidhu")}>Update Now</button>
    
        </div>
    )
}

export default App;