import React from "react";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

function App () {
    const [data,setData]=useState()
    const [print,setPrint]=useState(false)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{data}],
    };
  }

  render() {
    return (
    //   <div className="App">
    //     <h1>Todos</h1>
    //     <TodoList todos={this.state.todos} />
    //     <TodoForm />
    //   </div>
    <div className="App">
            <input type="text" onChange={setdata} />
            <button onClick={()=>setPrint(true)}>Update</button>
            <TodoList todos={this.state.data} />
            {
                print?
                <h1>{data}</h1>
                :null
            }
        </div>
    );
  }
}


<script>
export default {
  data: (App) => ({ show: false }),
  components: {
    Tooltip: () => import("./Taskk")
  }
};
</script>