import logo from './logo.svg';
import './App.css';
import Student from "./Student"
import Teacher from "./Teacher"
import User from './User'

function App() {

  function Apple()
  {
    return(<div>Apple Component</div>)
  }
  return (

    
   /* <div className="App">
      <h1>Hello World !</h1>
      <User />
      <Apple />
    </div>*/


   <div className="App">
      <Student />
      <Teacher />
    </div>


  );
}

export default App;
