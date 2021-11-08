import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeComponent/Home";
import Community from "./Component/Community";
import Workspace from "./Component/Workspace";
import Layout from "./Component/Layout";
import "./css/App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" index element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/workspace" element={<Workspace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
