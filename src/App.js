import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Header } from "./shared/Header1";
import { Footer } from "./shared/Footer";
import { Home } from "./Pages/Home/Home";
import  AddClient  from "./Pages/Client/AddClient.jsx";
import Booking from "./Pages/Booking/Booking.jsx";
function App() {
  return (
    <div className="App">
      
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientRegistration" element={<AddClient />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
          <Footer />
        </Router>
      
    </div>
  );
}

export default App;
