import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react'
function Rk() {
    // const [data,setData]=useState(null)
    // const [print,setPrint]=useState(false)
    const [inputList, setInputList]=useState();
    const [Items, setItems]=useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItem = () => {
        setItems((oldItems) => {
            return[...oldItems, inputList]
        });
    };


        //         function getdata(val)
        // {
        //     console.warn(val.target.value)
        //     setData(val.target.value)
        //     setPrint(false)
        // }
           return (
            <div className="App">
            <input type="text" placeholder='' onChange={itemEvent} />
            <button onClick={listOfItem}>Update</button>
            {/* {
                print?
                <h1>{data}</h1>
                :null
            } */}
            <ol>

              {  Items.map((itemval) => {
                    return<li> {itemval} </li>
                } )}
            </ol>    
        </div>
    );
}

export default Rk;