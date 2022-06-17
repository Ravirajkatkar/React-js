import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import Signup from "./components/Signup";
import Dashboard from "./components/DashBoard";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default App;
