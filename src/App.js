import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
export const config = {
     endpoint: `https://qkart-qpq8.onrender.com/api/v1`

};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      {/* <Register /> */}
      
      <Switch>

      {/* Using <Switch> ensures that only one route is rendered, making your routing behavior more predictable and preventing unintended rendering of multiple components. */}
        <Route exact path="/" component={Products} />
        {/* The exact prop in the first Route ensures that only when the path matches exactly "/" the Products component will be rendered. */}
        <Route path="/register" component={Register} /> 
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thanks" component={Thanks} />
      </Switch>
    </div>
  );
}

export default App;
