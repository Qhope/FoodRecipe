import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Home from "./page/Home";
import "./css/App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
