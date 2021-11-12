import './App.css';
import SearchBar from './Components/SearchBar';
import FoodData from './data.json';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Food Name..." data={FoodData} />
    </div>
  );
}

export default App;
