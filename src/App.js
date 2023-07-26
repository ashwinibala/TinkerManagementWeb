import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Home } from "./Pages/Home/Home";
import  AddClient  from "./Pages/Client/AddClient.jsx";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientRegistration" element={<AddClient />} />
          </Routes>
          <Footer />
        </Router>
      
    </div>
  );
}

export default App;
