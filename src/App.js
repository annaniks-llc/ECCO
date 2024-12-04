import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SectionOne from "./components/section_one/section_one";
import EccoExplore from "./screens/eccoExplore/eccoExplore";
import EccoSystem from "./screens/eccoSystem/eccoSystem";
import Home from "./screens/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<EccoExplore />} />
        <Route path="/system" element={<EccoSystem />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
