import './App.css';
import React ,{useState} from 'react'

function Task() {
    const [data,setData]=useState()
    const [print,setPrint]=useState(false)
    

        function getdata(val)
        {
            console.warn(val.target.value)
            setData(val.target.value)
            setPrint(false)
        }
           return (
        <div className="App">
            <input type="text" onChange={getdata} />
            <button onClick={()=>setPrint(true)}>Update</button>
            {
                print?
                <h1>{data}</h1>
                :null
            }
        </div>
    );
}
export default Task;


  
