import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Vacancy from "./pages/Vacancy";
import Work from "./pages/Work";

import ScrollToTop from "./utils/ScrollToTop"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
  <div className="App">
    <Router>
      <ScrollToTop/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/vacancy" element={<Vacancy/>}/>
            <Route path="vacancy/job/:id" element={<Work/>}/>
        </Routes>
        <Footer/>
    </Router>
    
  </div>
  );
}

export default App;
