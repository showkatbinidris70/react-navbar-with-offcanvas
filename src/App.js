import "./App.css";
import Home from "./Home";
import Contactus from "./components/Contactus";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
