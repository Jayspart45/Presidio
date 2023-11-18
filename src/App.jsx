import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Search from "./component/Search/Search";
import Home from "./component/Hero/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" index exact element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
