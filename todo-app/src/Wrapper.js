import Header from './Header';
import Form from './Form';
import React, { useState } from 'react';
import Tasklist from './Tasklist'; 
import './App.css';

function App() {
  const [showForm, setShowForm] =useState(false);
  const [showhide,setShowhide]=useState('Add');
  

  const [tasklist,setTasklist]=useState([
    {
      id: 1,
      Task: "Task 1",
      Day: "Saturday",
      Date:"01/01/2022",
      Time: "10.00PM",
      reminder : false
  },
  {
      id: 2,
      Task: "Task 2",
      Day: "Sunday",
      Date: "02/01/2022",
      Time: "10.12PM",
      reminder : true
  },
  {
    id: 3,
    Task: "Task 3",
    Day: "Monday",
    Date: "03/01/2022",
    Time: "10.43PM",
    reminder : false
  },
  {
    id: 4,
    Task: "Task 4",
    Day: "Thusday",
    Date: "04/01/2022",
    Time: "11.12PM",
    reminder : true
  },
  {
    id: 5,
    Task: "Task 5",
    Day: "Wensday",
    Date: "05/01/2022",
    Time: "11.35PM",
    reminder : true

  }
  ])
  // const list = [
    
  // ]

  // const toggleReminder =(id:any)=> {
  //   setTasks(task.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  // }
  
  // const deteteList = (list) =>{
  //   var newList = list;
  //   newList.splice(list,1);
  
  // }
  const Red ={
      backgroundColor: "Red",
    };
    const Green ={
      backgroundColor: "Green",
    };
 const [color,setColor]=React.useState(Green);
  function togglecolor(){
    setColor(Red)

  }
  function togglecolorG(){
    setColor(Green)
  }
  function togglebtn(){
    setShowForm(!showForm)
    
    
    if (showhide === 'Add') {
         setShowhide('Close');
         togglecolor();
        
    } else {
      setShowhide('Add')
      togglecolorG();
    }
  }

//   function deleteTask () {
//     console.log("task Deleted")
// }

const deleteTask = (id) =>{ 
  // let newlist = props.id;   const [tasklist,setTasklist]=useState([
  //       newlist.splice(id, 1)
  //       props.idset([...newlist]);
  console.log("Task",id,"Deleted");
  setTasklist(tasklist.filter((task)=> task.id !== id))
}
 

return (
  <div >
    <Header togglebtn={togglebtn} title={showhide} togglecolor={togglecolor} color={color} ></Header>
    {showForm && <Form ></Form>}
    <Tasklist list={tasklist} Delete={deleteTask}></Tasklist>

  </div>
);
}

export default App;
