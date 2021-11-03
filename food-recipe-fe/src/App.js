import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Home from "./Component/Home";
import SearchBar from "./Component/SearchBar";
import FoodData from "./full_format_recipes.json"
import "./css/App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home} exact={true} />
        </Switch>
        
        <SearchBar placehodler="Enter food name..." data={FoodData}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
