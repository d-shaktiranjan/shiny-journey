import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Mission } from "./components/Mission";
import { WhoWeAre } from "./components/WhoWeAre";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
      </Routes>
    </>
  );
}

export default App;
